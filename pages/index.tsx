import { GetStaticProps } from "next";

import { getAllProducts } from "@/lib/api";

import Banner from "@/components/Banner";
import ProductRecommendations from "@/components/ProductRecommendations";
import PageHead from "@/components/Head";

const Home = ({ products }) => {
  const bannerConfig = [
    {
      image: "/images/category-men.jpg",
      url: "/category/mens-clothing",
      category: "Mens Clothing",
    },
    {
      image: "/images/category-women.jpg",
      url: "/category/womens-clothing",
      category: "Womens Clothing",
    },
  ];

  return (
    <>
      <PageHead
        title="TheLOGO | Home"
        description="Your one stop online shop"
        keywords="online, ecommorce, shop"
      />
      <Banner bannerConfig={bannerConfig} />
      <ProductRecommendations header="Top Sellers" />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
};
