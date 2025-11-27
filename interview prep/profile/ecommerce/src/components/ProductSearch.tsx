import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ProductSearchProps {
  initialCategory?: string;
  initialSearch?: string;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ initialCategory, initialSearch }) => {
  const [category, setCategory] = useState(initialCategory || '');
  const [search, setSearch] = useState(initialSearch || '');
  const router = useRouter();

  useEffect(() => {
    setCategory(initialCategory || '');
    setSearch(initialSearch || '');
  }, [initialCategory, initialSearch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    if (category) searchParams.set('category', category);
    if (search) searchParams.set('search', search);
    router.push(`/products?${searchParams.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-grow">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border rounded-md"
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default ProductSearch;
