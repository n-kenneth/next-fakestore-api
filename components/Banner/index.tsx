import Link from "next/link";
import { HStack, Box, Text, Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  bannerConfig: Array<{
    image: string;
    category: string;
    url: string;
  }>;
}

const Banner = ({ bannerConfig }: Props): JSX.Element => (
  <HStack spacing="0">
    {bannerConfig.map((banner) => (
      <Link href={banner.url} key={banner.image + banner.url}>
        <Box
          w="50%"
          height="95vh"
          backgroundImage={`url(${banner.image})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          display="flex"
          justifyContent="center"
          alignItems="center"
          pos="relative"
          cursor="pointer"
        >
          <Box
            pos="absolute"
            w="100%"
            h="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgGradient="linear(to-r, rgba(0,0,0,.3), rgba(0,0,0,.3))"
            color="#fff"
          >
            <Button
              colorScheme="white"
              variant="outline"
              fontSize="lg"
              fontWeight="normal"
              borderRadius="0"
              _hover={{
                bg: "#fff",
                color: "#000",
                borderColor: "#fff",
              }}
            >{`Shop ${banner.category}`}</Button>
          </Box>
        </Box>
      </Link>
    ))}
  </HStack>
);

export default Banner;
