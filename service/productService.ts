import axios from "axios";
import type { ApiResponse, Product } from "@/types/product";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

class ProductService {
  // Function to fetch all products
  async getProducts(): Promise<Product[]> {
    try {
      // Call API GET /api/products
      const response = await axios.get<ApiResponse<Product[]>>(`${API_BASE_URL}/api/products`);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      return response.data.data;
    } catch (error) {
      // Handle error
      console.error("Failed to fetch products:", error);
      throw error;
    }
  }

  // Function to fetch a product by ID
  async getProductById(id: number): Promise<Product> {
    try {
      // Call API GET /api/products/[id]
      const response = await axios.get<ApiResponse<Product>>(`${API_BASE_URL}/api/products/${id}`);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      return response.data.data;
    } catch (error) {
      // Handle error
      console.error("Failed to fetch product by ID:", error);
      throw error;
    }
  }
}

export const productService = new ProductService();
