import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/product.model';
import { verifyToken } from '@/lib/jwt';

export async function POST(req: Request) {
  try {
    await dbConnect();

    // Verify the token and check if the user is an admin
    const token = req.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const updatedProducts = [
      {
        name: 'Professional Camera',
        image: '/images/products/c-d-x-PDX_a_82obo-unsplash.jpg',
      },
      {
        name: 'Fashion Backpack',
        image: '/images/products/andrea-ranalletta-u2dRP7YZorU-unsplash.jpg',
      },
      {
        name: 'Elegant Watch',
        image: '/images/products/eniko-kis-KsLPTsYaqIQ-unsplash.jpg',
      },
      {
        name: 'Designer Shoes',
        image: '/images/products/irene-kredenets-KStSiM1UvPw-unsplash.jpg',
      },
      {
        name: 'Premium Headphones',
        image: '/images/products/varun-gaba-dcgB3CgidlU-unsplash.jpg',
      },
    ];

    for (const product of updatedProducts) {
      await Product.findOneAndUpdate(
        { name: product.name },
        { $set: { 'images.0.url': product.image } },
        { new: true }
      );
    }

    return NextResponse.json({ message: 'Products updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating products:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
