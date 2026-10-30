export type CategoryId = "burgers" | "crepes" | "sandwiches" | "appetizers" | "meals";

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  subCategory?: string;
  price: number;
  doublePrice?: number;
  description?: string;
  badge?: string;
  isPopular?: boolean;
  isSignature?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  sub?: string;
}

export interface RestaurantInfo {
  name: string;
  englishName: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  address: string;
  city: string;
  locationDetails: string;
  instagram: string;
  deliveryMoto: string;
}

export interface DeliveryArea {
  id: string;
  name: string;
  fee: number;
  estimatedMinutes: string;
  notes?: string;
}

export interface CartItem {
  id: string;
  item: MenuItem;
  variant?: "single" | "double";
  price: number;
  quantity: number;
}
