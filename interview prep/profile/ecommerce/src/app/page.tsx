import Image from 'next/image';
import { Suspense } from 'react';
import FeaturedProducts from '@/components/FeaturedProducts';
import FeaturedProductsSkeleton from '@/components/FeaturedProductsSkeleton';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <div className="relative py-24 px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to E-Store
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Discover amazing products at great prices. Shop the latest trends in fashion, electronics, and more.
          </p>
          <a
            href="/products"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`/products?category=${category.slug}`}
              className="group relative rounded-lg overflow-hidden bg-gray-100 aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-200">{category.itemCount} items</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 dark:text-gray-100">Featured Products</h2>
        <Suspense fallback={<FeaturedProductsSkeleton />}>
          <FeaturedProducts />
        </Suspense>
      </section>
    </div>
  );
}

const categories = [
  {
    name: 'Electronics',
    slug: 'electronics',
    itemCount: '150+',
  },
  {
    name: 'Clothing',
    slug: 'clothing',
    itemCount: '300+',
  },
  {
    name: 'Books',
    slug: 'books',
    itemCount: '200+',
  }
];

const features = [
  {
    title: 'Free Shipping',
    description: 'Free shipping on orders over $50',
    icon: '🚚',
  },
  {
    title: 'Secure Payments',
    description: 'Safe & secure checkout',
    icon: '🔒',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer service',
    icon: '💬',
  }
];
