import { Product } from "./api";

export const filterProducts = (
  sort: string,
  products: Product[]
): Product[] => {
  if (sort === "asc") {
    return products.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    return products.sort((a, b) => b.price - a.price);
  } else {
    return products;
  }
};
