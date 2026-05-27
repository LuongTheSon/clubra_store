"use client";

import { useShop } from "@/hooks/useShop";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";
import PlaceOrder from "@/components/features/cart/PlaceOrder";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeItem, updateQuantity, formatCurrency } = useShop();

  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl p-4 py-[150px] text-center">
        <h1 className="mb-4 text-2xl font-bold">Cart is empty</h1>
        <Link
          href="/collections"
          className="flex items-center justify-center gap-2 text-lg text-neutral-600 hover:underline"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <p>Back to Collections</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="inner">
      <h1 className="mb-6 text-3xl font-bold">Cart</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left">Product</th>
              <th className="text-center">Size</th>
              <th className="text-center">Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-right">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-4">
                  <div className="flex gap-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={144}
                      height={144}
                      className="h-36 w-36 shrink-0 rounded object-cover"
                    />
                    <div>
                      <p className="w-full text-2xl font-semibold">{item.name}</p>
                    </div>
                  </div>
                </td>
                <td className="w-[80px] text-center">{item.size}</td>
                <td className="w-[160px] text-center">{formatCurrency(item.price)}</td>
                <td className="w-[120px] text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border"
                    >
                      −
                    </button>
                    <span className="flex w-10 items-center justify-center px-3">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="w-[160px] text-right font-semibold">
                  {formatCurrency(item.price * item.quantity)}
                </td>
                <td className="w-10 text-center">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="cursor-pointer font-bold text-red-600 hover:text-red-800"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PlaceOrder>
        <Button
          onClick={() => router.push("/order")}
          className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Place Order
        </Button>
      </PlaceOrder>

      <Link
        href="/collections"
        className="mt-4 flex items-center gap-2 text-lg text-neutral-600 hover:underline"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <p>Back to Collections</p>
      </Link>
    </div>
  );
}
