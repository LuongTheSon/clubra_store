"use client";
import FilltersBox from "@/components/features/collections/FilltersBox";
import ProductCard from "@/components/features/Products/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { useProducts } from "@/hooks/useProducts";
import { ChevronDownIcon } from "lucide-react";

const CollectionsPage = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <section>
      <div className="row flex justify-between gap-20">
        <div className="w-[315px] shrink-0">
          <h2 className="mb-6 text-4xl text-neutral-900">FILLTERS</h2>
          <FilltersBox />
        </div>
        <div className="w-full">
          <div className="mb-10 flex items-center justify-between">
            <SectionTitle title="COLLECTIONS" firstTitle="ALL" />
            <div className="relative">
              <select className="relative h-[50px] w-[315px] appearance-none border border-neutral-400 p-[10px_20px]">
                <option value="relavent">Sort by: Relavent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
              <ChevronDownIcon className="text-neutral-1000 absolute right-4 top-1/2 translate-y-[-50%]" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                image={product.image[0]}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsPage;
