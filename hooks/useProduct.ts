import { useQuery } from "react-query";
import { Product, getAllProducts } from "@/lib/api";

const useProduct = () => {
  const getProducts = (limit: number) => {
    const products = useQuery<Product[], Error>("products", () =>
      getAllProducts(limit)
    );
    return products;
  };

  return {
    getProducts,
  };
};

export default useProduct;
