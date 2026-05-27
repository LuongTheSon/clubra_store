"use client";
import FilltersBox from "@/components/features/collections/FilltersBox";
import Pagination from "@/components/features/collections/Pagination";
import ProductCard from "@/components/features/Products/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import usePagination from "@/hooks/usePaginations";
import { useProducts } from "@/hooks/useProducts";
import { useSearchStore } from "@/lib/store/searchStore";
import { Product } from "@/types/product";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

const CollectionsPage = () => {
  const ITEMS_PER_PAGE = 9;

  const [brand, setBrand] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const { products, isLoading, error } = useProducts();
  const { search, showSearch } = useSearchStore();
  const [fillerProduct, setFillerProduct] = useState<Product[]>([]);
  const [sortType, setSortType] = useState<string>("relavent");

  const {
    currentData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    setCurrentPage,
    jumpToPage,
    getMiddlePages,
  } = usePagination(fillerProduct, ITEMS_PER_PAGE);

  const toggleBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (brand.includes(e.target.value)) {
      setBrand(brand.filter((brand) => brand !== e.target.value));
    } else {
      setBrand([...brand, e.target.value]);
    }
  };

  const toggleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type.includes(e.target.value)) {
      setType(type.filter((type) => type !== e.target.value));
    } else {
      setType([...type, e.target.value]);
    }
  };

  useEffect(() => {
    const applyFilterandSort = () => {
      let productsCopy = [...products];

      if (brand.length > 0) {
        productsCopy = productsCopy.filter((product) => brand.includes(product.category));
      }

      if (type.length > 0) {
        productsCopy = productsCopy.filter((product) => type.includes(product.subCategory));
      }

      if (search && showSearch) {
        productsCopy = productsCopy.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      switch (sortType) {
        case "low-high":
          productsCopy.sort((a, b) => a.price - b.price);
          break;
        case "high-low":
          productsCopy.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }

      setFillerProduct(productsCopy);
      setCurrentPage(1);
    };

    applyFilterandSort();
  }, [products, brand, type, search, showSearch, sortType, setCurrentPage]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <section>
      <div className="inner flex justify-between gap-20">
        <div className="w-[315px] shrink-0">
          <h2 className="mb-6 text-4xl text-neutral-900">FILLTERS</h2>
          <FilltersBox toggleBrand={toggleBrand} toggleType={toggleType} />
        </div>
        <div className="w-full">
          <div className="mb-10 flex items-center justify-between">
            <SectionTitle title="COLLECTIONS" firstTitle="ALL" />
            <div className="relative">
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="relative h-[50px] w-[315px] appearance-none rounded-sm border border-neutral-400 p-[10px_20px]"
              >
                <option value="relavent">Sort by: Relavent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
              <ChevronDownIcon className="text-neutral-1000 absolute right-4 top-1/2 translate-y-[-50%]" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentData.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id.toString()}
                image={product.image[0]}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            prevPage={prevPage}
            nextPage={nextPage}
            jumpToPage={jumpToPage}
            getMiddlePages={getMiddlePages}
          />
        </div>
      </div>
    </section>
  );
};

export default CollectionsPage;
