import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import OrderModel, { IOrder } from '@/models/order.model';
import stripe from '@/lib/stripe';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET(
  req: Request,
  { params }: { params: { sessionId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { sessionId } = params;

    await clientPromise;

    // Retrieve the Stripe session
    const stripeSession = await stripe.checkout.sessions.retrieve(sessionId);

    if (!stripeSession) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    // Find the order in our database
    const order = await OrderModel.findOne({ 'paymentInfo.id': sessionId });

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    // Check if the order belongs to the authenticated user
    if (order.user.toString() !== session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Prepare the order details to send to the client
    const orderDetails = {
      orderId: order._id,
      status: order.orderStatus,
      amount: order.totalPrice / 100, // Convert cents to dollars
      items: order.orderItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price / 100, // Convert cents to dollars
      })),
    };

    return NextResponse.json(orderDetails);
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
