import {
  Box,
  Grid,
  GridItem,
  Text,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import { CartItem } from "../../context/cartContext";
import { Plus, Minus } from "react-feather";

interface Props {
  product: CartItem;
}

const Item = ({ product }: Props) => {
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
      <GridItem>
        <Text fontWeight="bold" fontSize="xl" mb="2">
          {product.title}
        </Text>
        <Text fontSize="lg" fontWeight="bold" color="gray.800" mb="5">
          ${product.price}
        </Text>
        <Grid gridTemplateColumns="1fr 2fr 1fr" gridGap="3">
          <Button>
            <Minus />
          </Button>
          <Input value={product.quantity} textAlign="center" />
          <Button>
            <Plus />
          </Button>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Item;
