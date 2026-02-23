
export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  price: number;
  image: string;
  isVeg: boolean;
  description: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  location: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  phoneNumber: string;
  restaurantName: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'delivered' | 'rejected';
  timestamp: number;
}

export interface AdminLoginHistory {
  timestamp: number;
  ip?: string; // Optional, hard to get accurately client-side without external service
}

export interface AdminUser {
  email: string;
  password: string; // In a real app, this would be hashed
  isApproved: boolean;
  role: 'super_admin' | 'admin';
  loginHistory: AdminLoginHistory[];
  joinedAt: number;
}

export type AppView = 'login' | 'restaurants' | 'menu' | 'cart' | 'success' | 'admin';
