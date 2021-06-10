import Link from "next/link";
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";

import { Product } from "../../lib/api";

const ProductCard = ({ id, title, price, category, image }: Product) => (
  <Link href={`/product/${id}`}>
    <a>
      <Box p="5" maxW="420px" borderWidth="1px" cursor="pointer" height="100%">
        <Box h="300px">
          <Image
            borderRadius="md"
            src={image}
            height="100%"
            m="auto"
            fit="contain"
          />
        </Box>
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="black">{category}</Badge>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {title}
        </Text>
        <Text mt={2} fontWeight="bold">
          ${price}
        </Text>
      </Box>
    </a>
  </Link>
);

export default ProductCard;
