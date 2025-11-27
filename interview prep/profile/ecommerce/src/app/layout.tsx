import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-commerce Store',
  description: 'Modern e-commerce store built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CartProvider>
            <WishlistProvider>
              <Header />
              <main className="min-h-screen py-8">{children}</main>
              <footer className="bg-gray-100 dark:bg-gray-800 py-6">
                <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
                  © {new Date().getFullYear()} E-Store. All rights reserved.
                </div>
              </footer>
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
