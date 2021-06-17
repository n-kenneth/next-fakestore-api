import {
  Box,
  Grid,
  GridItem,
  Text,
  Input,
  Button,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { CartItem } from "@/context/cartContext";
import { Plus, Minus, X } from "react-feather";

interface Props {
  product: CartItem;
  removeProduct: (id: number) => void;
  updateQuantity: (id: number, action: string) => void;
}

const Item = ({ product, removeProduct, updateQuantity }: Props) => {
  return (
    <Grid
      gridTemplateColumns="1fr 2fr"
      mb="4"
      borderTop="1px solid #bbb"
      py="4"
      _first={{
        borderTop: "none",
      }}
    >
      <GridItem>
        <Box h="150px" w="100%">
          <Image
            borderRadius="md"
            src={product.image}
            height="100%"
            m="auto"
            fit="contain"
          />
        </Box>
      </GridItem>
      <GridItem pos="relative">
        <Text fontWeight="bold" fontSize="xl" mb="2">
          {product.title}
        </Text>
        <Flex mb="5">
          <Text fontSize="lg" fontWeight="bold" color="gray.800">
            ${product.price}
          </Text>
          <Spacer />
          <Text onClick={() => removeProduct(product.id)} cursor="pointer">
            Remove Item
          </Text>
        </Flex>
        <Grid gridTemplateColumns="1fr 2fr 1fr" gridGap="3">
          <Button onClick={() => updateQuantity(product.id, "minus")}>
            <Minus />
          </Button>
          <Box
            textAlign="center"
            h="100%"
            background="gray.100"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="lg"
          >
            {product.quantity}{" "}
          </Box>
          <Button onClick={() => updateQuantity(product.id, "add")}>
            <Plus />
          </Button>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Item;
