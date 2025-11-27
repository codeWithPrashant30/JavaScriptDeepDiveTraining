'use client';

import Link from 'next/link';
import CartIcon from './CartIcon';
import WishlistIcon from './WishlistIcon';
import DarkModeToggle from './DarkModeToggle';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-500 dark:text-blue-400' : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white';
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              E-Store
            </Link>
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link 
                href="/products" 
                className={`${isActive('/products')} transition-colors`}
              >
                Products
              </Link>
              <Link 
                href="/categories" 
                className={`${isActive('/categories')} transition-colors`}
              >
                Categories
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className={`${isActive('/login')} transition-colors`}
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className={`${isActive('/signup')} transition-colors`}
            >
              Sign Up
            </Link>
            <WishlistIcon />
            <CartIcon />
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
