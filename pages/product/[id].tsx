import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { getAllProducts, getProduct, Product } from "@/lib/api";
import useCart from "@/hooks/useCart";
import {
  Grid,
  GridItem,
  Container,
  Box,
  Text,
  Badge,
  Button,
} from "@chakra-ui/react";
import ProductRecommendations from "@/components/ProductRecommendations";
import Loading from "@/components/Spinner";
import PageHead from "@/components/Head";

interface Props {
  product: Product;
}

const ProductPage = ({ product }: Props) => {
  const { saveToCart } = useCart();

  if (!product) return <Loading />;

  const handleAddToCart = () => {
    saveToCart(product);
  };

  return (
    <Container maxW="container.xl" mt="120px">
      <PageHead
        title={product.title}
        description={product.description}
        keywords={product.category}
      />
      <Grid templateColumns="1fr 1fr">
        <GridItem>
          <Box
            maxW="480px"
            height="640px"
            pos="relative"
            textAlign="center"
            display="flex"
            margin="auto"
          >
            <Image src={product.image} layout="fill" objectFit="contain" />
          </Box>
        </GridItem>
        <GridItem>
          <Container maxW="cotnaienr.sm">
            <Text fontSize="3xl" fontWeight="bold" lineHeight="shorter" mb="3">
              {product.title}
            </Text>
            <Text fontWeight="bold" fontSize="2xl" mb="2">
              ${product.price}
            </Text>
            <Badge
              mb="5"
              p="1.5"
              backgroundColor="#000"
              color="#fff"
              fontSize="11px"
              fontWeight="normal"
            >
              {product.category}
            </Badge>
            <Text lineHeight="tall" fontSize="lg" mb="10">
              {product.description}
            </Text>
            <Button
              backgroundColor="#000"
              color="#fff"
              borderRadius="0"
              px="10"
              py="2"
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </Container>
        </GridItem>
      </Grid>
      <ProductRecommendations header="You might also like" />
    </Container>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();
  const paths = products.map((product) => {
    return `/product/${product.id}`;
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await getProduct(params.id);
  return {
    props: {
      product,
    },
  };
};
