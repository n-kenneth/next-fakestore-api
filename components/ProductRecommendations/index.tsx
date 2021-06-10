import { Grid, Text, Container } from "@chakra-ui/react";
import useProduct from "../../hooks/useProduct";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";
import ProductCard from "../ProductCard";
import React from "react";

interface Props {
  header: string;
}

const ProductRecommendations = ({ header }: Props) => {
  const { getProducts } = useProduct();
  const { isLoading, data, isSuccess } = getProducts(4);

  if (isLoading) {
    return <ProductCardSkeleton count={4} />;
  }

  return (
    <Container maxW="container.xl" my="10">
      <Text fontWeight="bold" fontSize="4xl" mb="5">
        {header}
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductRecommendations;
