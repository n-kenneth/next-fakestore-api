import { Radio, RadioGroup, Text, Stack } from "@chakra-ui/react";
import { Product } from "@/lib/api";
import { filterProducts } from "@/lib/utilities";

interface Props {
  products: Product[];
  setProducts: (products: Product[]) => void;
  setSort: (sor: string) => void;
}

const Filter = ({ products, setProducts, setSort }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const sortedProducts = filterProducts(e.target.value, products);
    setProducts(sortedProducts);
    setSort(e.target.value);
  };
  return (
    <RadioGroup borderWidth="1px" borderRadius="lg" p="5">
      <Stack spacing={4} direction="column">
        <Text fontSize="18px" fontWeight="bold">
          Price
        </Text>
        <Radio value="desc" cursor="pointer" onChange={handleChange}>
          High to Low
        </Radio>
        <Radio value="asc" cursor="pointer" onChange={handleChange}>
          Low to High
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default Filter;
