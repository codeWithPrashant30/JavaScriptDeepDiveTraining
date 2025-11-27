import ProductCard from './ProductCard';

export default function FeaturedProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 5 }).map((_, index) => (
        <ProductCard key={`skeleton-${index}`} product={{} as any} loading />
      ))}
    </div>
  );
}
