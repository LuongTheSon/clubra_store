"use client";
import Button from "@/components/ui/Button";
import { useShop } from "@/hooks/useShop";
import { useShopStore } from "@/lib/store/shopStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { CartItem } from "@/types/shop";

export default function OrderSuccessPage() {
  const router = useRouter();
  const { formatCurrency, clearCart, delivery_free } = useShop();

  // Snapshot giỏ trước khi clear — trang success vẫn hiển thị đơn vừa mua
  const [orderItems] = useState<CartItem[]>(() => useShopStore.getState().items);

  const totalPrice = useMemo(
    () => orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [orderItems]
  );
  const totalWithDelivery = totalPrice + delivery_free;

  useEffect(() => {
    if (orderItems.length === 0) {
      router.replace("/collections");
      return;
    }
    clearCart();
  }, [clearCart, orderItems.length, router]);

  // Mock order data
  const orderId = `ORD-${new Date().getTime()}`;
  const estimatedDelivery = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <div className="inner">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-emerald-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white bg-opacity-20">
              <div className="flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-white">
                <svg
                  className="h-10 w-10 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="mb-4 text-5xl font-bold">Đặt hàng thành công!</h1>
          <p className="mb-2 text-xl text-emerald-50">Cảm ơn bạn đã mua sắm tại ShoeShop</p>
          <p className="text-emerald-100">Chúng tôi sẽ sớm giao hàng đến bạn</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-12">
        {/* Order Details Card */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Order ID */}
            <div className="border-l-4 border-emerald-600 pl-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">
                Mã đơn hàng
              </p>
              <p className="text-2xl font-bold text-gray-900">{orderId}</p>
            </div>

            {/* Estimated Delivery */}
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">
                Dự kiến giao hàng
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {estimatedDelivery.toLocaleDateString("vi-VN")}
              </p>
              <p className="mt-1 text-sm text-gray-500">Khoảng 5 ngày làm việc</p>
            </div>

            {/* Total Amount */}
            <div className="border-l-4 border-purple-600 pl-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">
                Tổng thanh toán
              </p>
              <p className="text-2xl font-bold text-emerald-600">
                {formatCurrency(totalWithDelivery)}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-linear-to-r my-8 h-px from-gray-200 via-gray-300 to-gray-200" />

          {/* Order Items */}
          <div className="mb-8">
            <h2 className="mb-6 text-xl font-bold text-gray-900">Chi tiết sản phẩm</h2>
            <div className="space-y-4">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl bg-slate-50 p-4 transition-colors hover:bg-slate-100"
                >
                  <div className="flex flex-1 items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      {item.quantity} x {formatCurrency(item.price)}
                    </p>
                    <p className="text-lg font-bold text-emerald-600">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="bg-linear-to-r my-8 h-px from-gray-200 via-gray-300 to-gray-200" />

          {/* Shipping Info */}
          <div className="mb-8 rounded-xl bg-blue-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
              <span className="text-2xl">📦</span> Thông tin vận chuyển
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Phương thức:</span> Giao hàng tiêu chuẩn
              </p>
              <p>
                <span className="font-semibold">Phí vận chuyển:</span> {formatCurrency(40000)}
              </p>
              <p>
                <span className="font-semibold">Trạng thái:</span>{" "}
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                  ✓ Đã xác nhận
                </span>
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="rounded-xl bg-gray-900 p-6 text-white">
            <div className="space-y-3">
              <div className="flex justify-between text-gray-300">
                <span>Tổng sản phẩm:</span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Phí giao hàng:</span>
                <span>{formatCurrency(40000)}</span>
              </div>
              <div className="h-px bg-gray-700" />
              <div className="flex justify-between text-xl font-bold">
                <span>Tổng cộng:</span>
                <span className="text-emerald-400">{formatCurrency(totalWithDelivery)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Email Confirmation */}
          <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center gap-2">
              <p className="mb-3 text-2xl">📧</p>
              <h3 className="mb-2 font-bold text-gray-900">Email xác nhận</h3>
            </div>
            <p className="mb-4 text-base text-gray-600">
              Chúng tôi đã gửi email xác nhận chi tiết đơn hàng của bạn
            </p>
            <Link
              href="#"
              className="text-base font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Xem email →
            </Link>
          </div>

          {/* Track Order */}
          <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center gap-2">
              <p className="mb-3 text-2xl">🚚</p>
              <h3 className="mb-2 font-bold text-gray-900">Theo dõi đơn hàng</h3>
            </div>
            <p className="mb-4 text-base text-gray-600">
              Bạn có thể theo dõi tình trạng giao hàng từ tài khoản của bạn
            </p>
            <Link
              href="#"
              className="text-base font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Xem trạng thái →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            onClick={() => router.push("/collections")}
            className="flex-1 rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-emerald-700 hover:shadow-xl sm:flex-none"
          >
            Tiếp tục mua sắm
          </Button>
          <Link
            href="/"
            className="flex-1 rounded-lg bg-gray-200 px-8 py-3 text-center font-semibold text-gray-900 transition-colors hover:bg-gray-300 sm:flex-none"
          >
            Về trang chủ
          </Link>
        </div>

        {/* Support Info */}
        <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6 text-center">
          <p className="mb-3 text-gray-600">Có câu hỏi gì không?</p>
          <p className="font-semibold text-gray-900">
            Liên hệ hỗ trợ: support@shoeshop.vn | 1800-1234
          </p>
        </div>
      </div>
    </div>
  );
}
