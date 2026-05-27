import { useShop } from "@/hooks/useShop";

export default function PlaceOrder({ children }: { children?: React.ReactNode }) {
  const { formatCurrency, totalPrice, delivery_free, totalWithDelivery } = useShop();
  return (
    <div className="ml-auto mt-8 max-w-md rounded-lg bg-gray-100 p-6">
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Total Products:</span>
          <span className="font-semibold">{formatCurrency(totalPrice)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Fee:</span>
          <span className="font-semibold">{formatCurrency(delivery_free)}</span>
        </div>
        <div className="flex justify-between border-t pt-3 text-lg font-bold">
          <span>Total:</span>
          <span className="text-blue-600">{formatCurrency(totalWithDelivery)}</span>
        </div>
      </div>
      {children}
    </div>
  );
}
