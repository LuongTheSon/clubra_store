"use client";

import { productService } from "@/service/productService";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

interface UseProductDetailReturn {
  product: Product | null;
  isLoading: boolean;
  error: string | null;
}

export function useProductDetail(id: string): UseProductDetailReturn {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        // Clean error state
        setError(null);

        // Call API from Service
        const data = await productService.getProductById(id);

        // Save data to state
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Dependecy: re-run the effect when the id changes

  return { product, isLoading, error };
}
