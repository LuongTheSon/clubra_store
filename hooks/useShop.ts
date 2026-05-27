import { useShopStore } from "@/lib/store/shopStore";

export const useShop = () => {
  const {
    items,
    delivery_free,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    formatCurrency,
  } = useShopStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  const totalWithDelivery = totalPrice + delivery_free;

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    delivery_free,
    totalWithDelivery,
    formatCurrency,
  };
};
