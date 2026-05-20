"use client";

import { productService } from "@/service/productService";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

interface UseProductsReturn {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        // Clean error state
        setError(null);

        // Call API from Service
        const data = await productService.getProducts();

        // Save data to state
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, error };
}
