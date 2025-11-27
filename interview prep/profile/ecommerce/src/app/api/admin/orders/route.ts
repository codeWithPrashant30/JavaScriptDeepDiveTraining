import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import OrderModel from "@/models/order.model";
import connectDB from "@/lib/mongodb";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    await connectDB();

    const orders = await OrderModel.find()
      .sort({ createdAt: -1 })
      .populate("user", "name email")
      .lean();

    // Format dates and IDs for JSON response
    const formattedOrders = orders.map(order => ({
      ...order,
      _id: order._id.toString(),
      user: {
        ...order.user,
        _id: order.user._id.toString()
      },
      createdAt: order.createdAt.toISOString()
    }));

    return NextResponse.json(formattedOrders);
  } catch (error) {
    console.error("[ADMIN_GET_ORDERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const body = await request.json();
    const { orderId, orderStatus } = body;

    if (!orderId || !orderStatus) {
      return new NextResponse("Missing orderId or orderStatus", { status: 400 });
    }

    await connectDB();

    const updatedOrder = await OrderModel.findByIdAndUpdate(
      orderId,
      { orderStatus },
      { new: true }
    ).lean();

    if (!updatedOrder) {
      return new NextResponse("Order not found", { status: 404 });
    }

    // Format the response
    const formattedOrder = {
      ...updatedOrder,
      _id: updatedOrder._id.toString(),
      user: updatedOrder.user.toString(),
      createdAt: updatedOrder.createdAt.toISOString()
    };

    return NextResponse.json(formattedOrder);
  } catch (error) {
    console.error("[ADMIN_UPDATE_ORDER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
