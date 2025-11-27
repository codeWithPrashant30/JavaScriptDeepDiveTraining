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

    const { name, description, price, category, images, stock } = await req.json();

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      images,
      stock,
      seller: decoded.userId, // Add the seller (admin user) who created the product
    });

    await newProduct.save();

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    await dbConnect();

    // Check if there are any products
    const productCount = await Product.countDocuments();
    
    // If no products exist, create initial products
    if (productCount === 0) {
      const initialProducts = [
        {
          name: 'Professional Camera',
          description: 'High-quality professional camera for photography enthusiasts',
          price: 799.99,
          category: 'Electronics',
          images: [{ url: '/images/products/c-d-x-PDX_a_82obo-unsplash.jpg', alt: 'Professional Camera' }],
          stock: 10,
          ratings: 4.5,
          numReviews: 12,
        },
        {
          name: 'Fashion Backpack',
          description: 'Stylish and practical backpack for everyday use',
          price: 89.99,
          category: 'Accessories',
          images: [{ url: '/images/products/andrea-ranalletta-u2dRP7YZorU-unsplash.jpg', alt: 'Fashion Backpack' }],
          stock: 15,
          ratings: 4.2,
          numReviews: 8,
        },
        {
          name: 'Elegant Watch',
          description: 'Sophisticated timepiece with premium build quality',
          price: 299.99,
          category: 'Accessories',
          images: [{ url: '/images/products/eniko-kis-KsLPTsYaqIQ-unsplash.jpg', alt: 'Elegant Watch' }],
          stock: 8,
          ratings: 4.7,
          numReviews: 15,
        },
        {
          name: 'Designer Shoes',
          description: 'Comfortable and stylish designer shoes',
          price: 149.99,
          category: 'Fashion',
          images: [{ url: '/images/products/irene-kredenets-KStSiM1UvPw-unsplash.jpg', alt: 'Designer Shoes' }],
          stock: 20,
          ratings: 4.3,
          numReviews: 10,
        },
        {
          name: 'Premium Headphones',
          description: 'High-fidelity audio headphones with noise cancellation',
          price: 199.99,
          category: 'Electronics',
          images: [{ url: '/images/products/varun-gaba-dcgB3CgidlU-unsplash.jpg', alt: 'Premium Headphones' }],
          stock: 12,
          ratings: 4.6,
          numReviews: 18,
        },
      ];

      await Product.insertMany(initialProducts);
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    const query: any = {};
    if (category) query.category = category;
    if (search) query.name = { $regex: search, $options: 'i' };

    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);

    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    return NextResponse.json({
      products,
      currentPage: page,
      totalPages,
      totalProducts,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
