export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T; // Data type (Product[], Product, null...)
  message: string;
}
