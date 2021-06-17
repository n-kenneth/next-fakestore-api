import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Badge, Text } from "@chakra-ui/react";

import { Product } from "@/lib/api";

const ProductCard = ({ id, title, price, category, image }: Product) => (
  <Link href={`/product/${id}`}>
    <a>
      <Box p="5" maxW="420px" borderWidth="1px" cursor="pointer" height="100%">
        <Box h="300px" w="100%" pos="relative">
          <Image src={image} layout="fill" />
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
