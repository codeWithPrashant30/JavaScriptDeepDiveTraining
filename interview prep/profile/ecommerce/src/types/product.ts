export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  rating?: number;
  reviews?: number;
  variants?: {
    size?: string[];
    color?: string[];
  };
}
