import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import OrderModel, { IOrder } from "@/models/order.model";
import connectDB from "@/lib/mongodb";
import mongoose, { Document } from "mongoose";

interface PopulatedOrderItem {
  _id: mongoose.Types.ObjectId;
  product: {
    _id: mongoose.Types.ObjectId;
    name: string;
    price: number;
    image: string;
  };
  quantity: number;
  price: number;
}

interface PopulatedOrder extends Omit<mongoose.FlattenMaps<IOrder>, 'user' | 'orderItems'> {
  _id: mongoose.Types.ObjectId;
  user: {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
  };
  orderItems: PopulatedOrderItem[];
}

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const orderId = params.id;

    await connectDB();

    const rawOrder = await OrderModel.findById(orderId)
      .populate("user", "name email")
      .populate("orderItems.product", "name price image")
      .lean();

    if (!rawOrder) {
      return new NextResponse("Order not found", { status: 404 });
    }

    const order = rawOrder as unknown as PopulatedOrder;


    // Format the response
    const formattedOrder = {
      ...order,
      _id: order._id.toString(),
      user: {
        ...order.user,
        _id: order.user._id.toString()
      },
      orderItems: order.orderItems.map(item => ({
        ...item,
        _id: item._id.toString(),
        product: {
          ...item.product,
          _id: item.product._id.toString()
        }
      })),
      createdAt: order.createdAt.toISOString()
    };

    return NextResponse.json(formattedOrder);
  } catch (error) {
    console.error("[ADMIN_GET_ORDER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
