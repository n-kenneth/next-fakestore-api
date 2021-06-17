import { useState, useEffect } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Container, Grid, GridItem } from "@chakra-ui/react";

import { getAllCategories, getProductsInCategory, Product } from "@/lib/api";

import Loading from "@/components/Spinner";
import ProductCard from "@/components/ProductCard";
import Filter from "@/components/Filter";
import { filterProducts } from "@/lib/utilities";
import PageHead from "@/components/Head";

interface Props {
  products: Product[];
  category: string;
}

const Category = ({ products, category }: Props) => {
  const [categoryProducts, setCategoryProducts] = useState<Product[]>(products);
  const [sort, setSort] = useState("");

  useEffect(() => {
    if (sort) {
      const sortedProduct = filterProducts(sort, products);
      setCategoryProducts(sortedProduct);
    } else {
      setCategoryProducts(products);
    }
  }, [sort, products]);

  useEffect(() => {
    setCategoryProducts(categoryProducts);
  }, [sort, categoryProducts]);

  if (!categoryProducts) return <Loading />;

  return (
    <Container maxW="container.xl" mt="165px">
      <PageHead
        title={category}
        description={`${category} category page`}
        keywords={category}
      />
      <Grid templateColumns="1fr 4fr" gap="10">
        <GridItem>
          <Filter
            products={categoryProducts}
            setProducts={setCategoryProducts}
            setSort={setSort}
          />
        </GridItem>
        <GridItem>
          <Grid gridTemplateColumns="repeat(3, 1fr)">
            {categoryProducts.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  );
  return;
};

export default Category;

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories();
  const paths = categories.map((category) => {
    if (category === "men's clothing") {
      return `/category/mens-clothing`;
    } else if (category === "women's clothing") {
      return `/category/womens-clothing`;
    } else {
      return `/category/${category}`;
    }
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let category = params.name;
  if (category === "mens-clothing") {
    category = `men's clothing`;
  } else if (category === "womens-clothing") {
    category = `women's clothing`;
  }
  const products = await getProductsInCategory(category);
  return {
    props: {
      products,
      category,
    },
  };
};
