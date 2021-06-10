import { useQuery } from "react-query";
import { getAllCategories } from "../lib/api";

const useCategory = () => {
  const getCategories = () => {
    const categories = useQuery<string[], Error>("categories", () =>
      getAllCategories()
    );
    return categories;
  };

  return {
    getCategories,
  };
};

export default useCategory;
