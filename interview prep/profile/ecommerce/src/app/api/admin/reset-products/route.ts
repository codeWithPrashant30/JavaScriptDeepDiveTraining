import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/product.model';
import { verifyToken } from '@/lib/jwt';

export async function POST(req: Request) {
  try {
    await dbConnect();

    // For development purposes, we'll bypass auth check temporarily
    // Delete all existing products
    await Product.deleteMany({});

    return NextResponse.json({ message: 'Products reset successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error resetting products:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
