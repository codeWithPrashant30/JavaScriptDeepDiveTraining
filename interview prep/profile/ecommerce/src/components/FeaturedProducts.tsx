import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Professional Camera',
    price: 799.99,
    image: '/images/products/c-d-x-PDX_a_82obo-unsplash.jpg',
  },
  {
    id: 2,
    name: 'Fashion Backpack',
    price: 89.99,
    image: '/images/products/andrea-ranalletta-u2dRP7YZorU-unsplash.jpg',
  },
  {
    id: 3,
    name: 'Elegant Watch',
    price: 299.99,
    image: '/images/products/eniko-kis-KsLPTsYaqIQ-unsplash.jpg',
  },
  {
    id: 4,
    name: 'Designer Shoes',
    price: 149.99,
    image: '/images/products/irene-kredenets-KStSiM1UvPw-unsplash.jpg',
  },
  {
    id: 5,
    name: 'Premium Headphones',
    price: 199.99,
    image: '/images/products/varun-gaba-dcgB3CgidlU-unsplash.jpg',
  },
];

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
