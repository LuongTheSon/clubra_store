import { create } from "zustand";
import { CartItem } from "@/types/shop";

interface ShopStore {
  // State
  items: CartItem[];
  delivery_free: number;

  // Actions
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;

  // Selectors & Helpers
  getTotalItems: () => number;
  getTotalPrice: () => number;
  formatCurrency: (amount: number) => string;
}

export const useShopStore = create<ShopStore>((set, get) => ({
  items: [],
  delivery_free: 40000, // Phí giao hàng cố định

  addItem: (newItem) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.productId === newItem.productId && item.size === newItem.size
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          ),
        };
      }

      return { items: [...state.items, newItem] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      items:
        quantity <= 0
          ? state.items.filter((item) => item.id !== id)
          : state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    })),

  clearCart: () => set({ items: [] }),

  getTotalItems: () => {
    const state = get();
    return state.items.reduce((sum, item) => sum + item.quantity, 0);
  },

  getTotalPrice: () => {
    const state = get();
    return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  // Format tiền VNĐ
  formatCurrency: (amount: number) => {
    return new Intl.NumberFormat("vi-VN").format(amount) + " VNĐ";
  },
}));
