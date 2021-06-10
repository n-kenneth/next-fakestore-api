const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export const getAllProducts = async (limit?: number): Promise<Product[]> => {
  const queryURL = limit
    ? `${endpoint}/products/?limit=${limit}`
    : `${endpoint}/products/`;
  const data = await fetch(queryURL);
  const products: Product[] = await data.json();
  return products;
};

export const getProduct = async (id: string | string[]): Promise<Product> => {
  const data = await fetch(`${endpoint}/products/${id}`);
  const product: Product = await data.json();
  return product;
};

export const getProductsInCategory = async (
  category: string | string[]
): Promise<Product[]> => {
  const data = await fetch(`${endpoint}/products/category/${category}`);
  const products: Product[] = await data.json();
  return products;
};

export const getAllCategories = async (): Promise<string[]> => {
  const data = await fetch(`${endpoint}/products/categories`);
  const categories: string[] = await data.json();
  return categories;
};
