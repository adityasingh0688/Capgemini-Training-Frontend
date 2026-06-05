
export interface ProductResponse {
  products: Product[];
}
export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

