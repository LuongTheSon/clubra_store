import { mockProducts } from "@/data/products";
import type { Product } from "@/types/product";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const { id } = await params;

    const product: Product | undefined = mockProducts.find((p) => p._id === id);

    if (!product) {
      return Response.json(
        {
          success: false,
          data: null,
          message: "Product not found",
        },
        { status: 404 }
      );
    }

    // Return product found successfully
    return Response.json({
      success: true,
      data: product,
      message: "Product fetched successfully",
    });
  } catch (error) {
    console.error("API Error:", error);

    return Response.json(
      {
        success: false,
        data: null,
        message: "Error fetching product",
      },
      { status: 500 }
    );
  }
}
