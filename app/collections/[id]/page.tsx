"use client";

import ProductDescription from "@/components/features/Products/ProductDescription";
import ProductRate from "@/components/features/Products/ProductRate";
import Button from "@/components/ui/Button";
import { useProductDetail } from "@/hooks/useProductDetail";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProductDetailPage() {
  const params = useParams();

  const id = params.id as string;
  const { product, isLoading, error } = useProductDetail(id);

  const [selectedThumbnail, setSelectedThumbnail] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState("");

  console.log(selectedSize);

  const thumbnail = selectedThumbnail || product?.image[0];

  // Loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  // Error state
  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-red-500">Error: {error || "Product not found"}</div>
      </div>
    );
  }

  return (
    <div className="inner">
      <div className="flex justify-between border-t border-neutral-500 pt-12">
        <div className="mr-[50px] flex w-[746px]">
          <div className="grid-rows-[repeat(4, 138px)] mr-4 grid h-[591px] gap-3 overflow-y-auto [-webkit-overflow-scrolling:touch]">
            {product.image.map((item, index) => (
              <figure className="w-[138px] cursor-pointer" key={index}>
                <Image
                  onClick={() => setSelectedThumbnail(item)}
                  src={item}
                  alt=""
                  width={150}
                  height={150}
                />
              </figure>
            ))}
          </div>
          <figure className="relative w-[591px]">
            <Image src={thumbnail || ""} alt="" className="fit" width={600} height={600} />
          </figure>
        </div>
        <div className="mb-32">
          <h1 className="mb-6 text-5xl font-medium leading-[1.3]">{product.name}</h1>
          <ProductRate />
          <h4 className="mb-8 text-5xl font-medium">${product.price}</h4>
          <p className="mb-8 text-xl leading-[1.8] tracking-wide">{product.description}</p>
          <div className="mb-10">
            <p className="mb-5 text-3xl font-medium text-neutral-600">Select Size</p>
            <div className="grid grid-cols-5 gap-4">
              {product.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(selectedSize === item ? "" : item)}
                  className={`text-neutral-1000 h-[60px] w-[60px] cursor-pointer border border-neutral-300 bg-gray-50 ${selectedSize === item ? "border-amber-500! border-2" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <Button className="mb-10">ADD TO CART</Button>
          <p className="border-t border-neutral-500 pt-7 text-xl leading-[1.8] text-neutral-600">
            100% Original product.
            <br />
            Cash on delivery is available on this product.
            <br />
            Easy return and exchange policy within 7 days.
          </p>
        </div>
      </div>
      <ProductDescription />
    </div>
  );
}
