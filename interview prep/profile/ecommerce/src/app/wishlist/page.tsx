'use client';

import { useWishlist } from '@/contexts/WishlistContext';
import Link from 'next/link';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
        <p>Your wishlist is empty. <Link href="/products" className="text-blue-500 hover:underline">Start shopping</Link></p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wishlist.map((item) => (
          <div key={item._id} className="border rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/products/${item._id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
