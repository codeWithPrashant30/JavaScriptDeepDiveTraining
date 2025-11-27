'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import ProductSearch from '@/components/ProductSearch';
import ProductSkeleton from '@/components/ProductSkeleton';

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

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  const fetchProducts = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await fetch(`/api/products?page=${currentPage}&category=${category || ''}&search=${search || ''}`);
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      setProducts(data.products);
      setTotalPages(data.totalPages);
      setLoading(false);
    } catch (err) {
      setError('Error fetching products. Please try again.');
      setLoading(false);
    }
  }, [currentPage, category, search]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (error) {
    return (
      <div className="container mx-auto px-4 text-red-500 text-center py-8">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Our Products</h1>
      
      <ProductSearch 
        initialCategory={category || ''} 
        initialSearch={search || ''} 
      />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No products found. Try adjusting your search criteria.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link href={`/products/${product._id}`} key={product._id}>
            <div className="card group hover:shadow-xl dark:hover:shadow-gray-700 transition-shadow duration-300">
              <div className="relative">
                <img
                  src={product.images[0]?.url || '/placeholder.jpg'}
                  alt={product.images[0]?.alt || product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2">
                  <span className="badge badge-success">
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h2>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <p className="badge bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mb-3">{product.category}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < Math.round(product.ratings) ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      ({product.numReviews})
                    </span>
                  </div>
                </div>
              </div>
            </div>
              </Link>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`btn ${
                currentPage === page 
                  ? 'btn-primary' 
                  : 'btn-secondary'
              }`}
            >
              {page}
            </button>
            ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
