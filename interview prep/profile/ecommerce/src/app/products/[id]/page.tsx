'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import CartIcon from '@/components/CartIcon';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: { url: string; alt: string }[];
  stock: number;
  ratings: number;
  numReviews: number;
}

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.images[0]?.url || '/placeholder.jpg',
      });
    }
  };

  const handleWishlistToggle = () => {
    if (product) {
      if (isInWishlist(product._id)) {
        removeFromWishlist(product._id);
      } else {
        addToWishlist({
          _id: product._id,
          name: product.name,
          price: product.price,
          image: product.images[0]?.url || '/placeholder.jpg',
        });
      }
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError('Error fetching product. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!product) return <div className="text-center py-8">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <Link href="/products" className="text-blue-500 hover:underline inline-block">
          ← Back to Products
        </Link>
        <CartIcon />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.images[0]?.url || '/placeholder.jpg'}
            alt={product.images[0]?.alt || product.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{product.ratings.toFixed(1)}</span>
            <span className="ml-2 text-gray-500">({product.numReviews} reviews)</span>
          </div>
          <p className={`mb-4 ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>
          <div className="flex space-x-4">
            <button 
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
              disabled={product.stock === 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button 
              className={`px-6 py-2 rounded-md transition-colors ${
                isInWishlist(product._id)
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={handleWishlistToggle}
            >
              {isInWishlist(product._id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
