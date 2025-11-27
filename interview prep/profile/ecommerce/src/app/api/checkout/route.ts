import { NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe';
import { auth } from '@/lib/auth';
import connectToDatabase from '@/lib/mongodb';
import CartModel from '@/models/cart.model';
import { getServerSession } from 'next-auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(auth);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;

    await connectToDatabase();
    const cart = await CartModel.findOne({ user: userId }).populate('items.product');

    if (!cart || cart.items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    const items = cart.items.map((item: any) => ({
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
      image: item.product.images[0]?.url || '/placeholder.jpg',
    }));

    const { sessionId } = await createCheckoutSession(items);

    return NextResponse.json({ sessionId });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
