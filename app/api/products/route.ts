import { mockProducts } from "@/data/products";
import type { ApiResponse, Product } from "@/types/product";

export async function GET(): Promise<Response> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const successResponse: ApiResponse<Product[]> = {
      success: true,
      data: mockProducts,
      message: "Products fetched successfully",
    };

    return Response.json(successResponse);
  } catch (error) {
    console.error("API Error:", error);

    const errorResponse: ApiResponse<null> = {
      success: false,
      data: null,
      message: "Failed to fetch products",
    };

    return Response.json(errorResponse, { status: 500 });
  }
}
