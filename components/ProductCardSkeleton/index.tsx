import { Skeleton, Box, SkeletonText, HStack } from "@chakra-ui/react";

interface Props {
  count?: number;
}

const ProductCardSkeleton = ({ count }: Props) => {
  if (!count || count === 0) {
    return (
      <Box p="5" maxW="420px" borderWidth="1px" cursor="pointer" w="25%">
        <Skeleton minHeight="250px" />
        <SkeletonText mb="3" />
        <SkeletonText mb="3" />
        <SkeletonText mb="3" />
        <SkeletonText />
      </Box>
    );
  }

  let skeletons: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(
      <Box
        p="5"
        maxW="420px"
        borderWidth="1px"
        cursor="pointer"
        w="25%"
        key={count + Math.random()}
      >
        <Skeleton minHeight="250px" />
        <SkeletonText mb="3" />
        <SkeletonText mb="3" />
        <SkeletonText mb="3" />
        <SkeletonText />
      </Box>
    );
  }

  return <HStack>{skeletons}</HStack>;
};

export default ProductCardSkeleton;
