import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import OrderModel from "@/models/order.model";
import connectDB from "@/lib/mongodb";
import { Types } from "mongoose";

interface UserDocument {
  _id: Types.ObjectId;
  name?: string;
  email?: string;
}

interface OrderDocument {
  _id: Types.ObjectId;
  orderStatus: string;
  totalPrice: number;
  createdAt: Date;
  user: UserDocument;
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    await connectDB();

    const recentOrders = await OrderModel.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("user", "name email")
      .lean() as OrderDocument[];

    const formattedOrders = recentOrders.map((order) => ({
      _id: order._id.toString(),
      orderStatus: order.orderStatus,
      totalPrice: order.totalPrice,
      createdAt: order.createdAt.toISOString(),
      user: {
        name: order.user?.name || 'N/A',
        email: order.user?.email || 'N/A',
      },
    }));

    return NextResponse.json(formattedOrders);
  } catch (error) {
    console.error("[ADMIN_RECENT_ORDERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
