
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  retailPrice: number;
  volumePrice?: number;
  volumeInfo?: string;
  category: string;
  image: string;
  popular?: boolean;
}

export interface CartItem extends Product {
  qty: number;
}

export interface CustomerData {
  name: string;
  phone: string;
  address: string;
  city: string;
  paymentMethod: string;
}

export interface ShopInfo {
  name: string;
  tagline: string;
  phone: string;
  currency: string;
  location: string;
}

export interface ShopData {
  info: ShopInfo;
  categories: string[];
  products: Product[];
}
