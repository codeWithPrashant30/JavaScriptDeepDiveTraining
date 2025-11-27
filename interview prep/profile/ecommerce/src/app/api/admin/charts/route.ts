import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import OrderModel from "@/models/order.model";
import ProductModel from "@/models/product.model";
import { startOfDay, subDays, format } from "date-fns";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    await connectDB();

    // Get daily revenue for the last 7 days
    const today = startOfDay(new Date());
    const dailyRevenue = await Promise.all(
      Array.from({ length: 7 }, async (_, i) => {
        const date = subDays(today, i);
        const nextDate = subDays(today, i - 1);

        const orders = await OrderModel.find({
          createdAt: {
            $gte: date,
            $lt: nextDate,
          },
          "paymentInfo.status": "paid",
        });

        const revenue = orders.reduce(
          (sum, order) => sum + order.totalPrice,
          0
        );

        return {
          date: format(date, "MMM dd"),
          revenue: Number(revenue.toFixed(2)),
        };
      })
    );

    // Get order status distribution
    const orderStatusDistribution = await OrderModel.aggregate([
      {
        $group: {
          _id: "$orderStatus",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          status: "$_id",
          count: 1,
          _id: 0,
        },
      },
    ]);

    // Get top selling products
    const topSellingProducts = await OrderModel.aggregate([
      { $unwind: "$orderItems" },
      {
        $group: {
          _id: "$orderItems.product",
          sales: { $sum: "$orderItems.quantity" },
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "product",
        },
      },
      { $unwind: "$product" },
      {
        $project: {
          name: "$product.name",
          sales: 1,
          _id: 0,
        },
      },
      { $sort: { sales: -1 } },
      { $limit: 5 },
    ]);

    return NextResponse.json({
      dailyRevenue: dailyRevenue.reverse(),
      orderStatusDistribution,
      topSellingProducts,
    });
  } catch (error) {
    console.error("[ADMIN_CHARTS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
