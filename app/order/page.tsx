"use client";
import PaymentMethod from "@/components/features/cart/PaymentMethod";
import PlaceOrder from "@/components/features/cart/PlaceOrder";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { useRouter } from "next/navigation";

export default function OrderPage() {
  const router = useRouter();
  return (
    <section>
      <div className="inner">
        <div className="gap-30 flex items-end">
          <div className="w-full">
            <SectionTitle title="Information" firstTitle="Delivery" className="mb-8" />
            <div>
              <form action="" className="flex flex-col gap-4">
                <div className="flex justify-between gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="h-12 w-full rounded border border-gray-300 p-2 text-2xl"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="h-12 w-full rounded border border-gray-300 p-2 text-2xl"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email addess"
                    className="h-12 w-full rounded border border-gray-300 p-2 text-2xl"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Street"
                    className="h-12 w-full rounded border border-gray-300 p-2 text-2xl"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="h-12 w-full rounded border border-gray-300 p-2 text-2xl"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="h-12 w-full rounded border border-gray-300 p-2 text-2xl"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Zip code"
                    className="h-12 w-full rounded border border-gray-300 p-2 text-2xl"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="h-12 w-full rounded border border-gray-300 p-2 text-2xl"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="h-12 w-full rounded border border-gray-300 p-2 text-2xl"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="w-[450px] shrink-0">
            <PaymentMethod />
            <PlaceOrder></PlaceOrder>
            <Button
              onClick={() => router.push("/order/success")}
              className="mt-6 w-full rounded bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              PLACE ORDER
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
