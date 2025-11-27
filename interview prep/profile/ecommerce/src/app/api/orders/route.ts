import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import OrderModel from '@/models/order.model';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await clientPromise;

    const orders = await OrderModel.find({ user: session.user.id })
      .sort({ createdAt: -1 })
      .select('orderStatus totalPrice createdAt orderItems')
      .lean();

    const formattedOrders = orders.map(order => ({
      ...order,
      _id: order._id.toString(),
      createdAt: order.createdAt.toISOString(),
      orderItems: order.orderItems.map(item => ({
        ...item,
        price: item.price / 100 // Convert cents to dollars
      })),
      totalPrice: order.totalPrice / 100 // Convert cents to dollars
    }));

    return NextResponse.json(formattedOrders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
