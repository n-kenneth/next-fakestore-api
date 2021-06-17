import { Product } from "@/lib/api";
import { CartItem } from "@/context/cartContext";

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

export const getTotalPrice = (products: CartItem[]): number => {
  const totalPrice = products.reduce(
    (prevValue, currentProduct) =>
      (prevValue += currentProduct.price * currentProduct.quantity),
    0
  );
  return totalPrice;
};

export const getTotalQuantity = (products: CartItem[]): number => {
  const totalQuantity = products.reduce(
    (prevValue, currentProduct) => (prevValue += currentProduct.quantity),
    0
  );
  return totalQuantity;
};
