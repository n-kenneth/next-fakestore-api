import useCart from "../../hooks/useCart";
import { ShoppingCart, X } from "react-feather";
import {
  Box,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import CartItem from "../CartItem";
import { useEffect } from "react";
import { getTotalPrice } from "../../lib/utilities";

const Cart = () => {
  const { cart, openCart, setOpenCart, removeFromCart, updateQuantity } =
    useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (openCart) {
      onOpen();
    }
  }, [openCart]);

  const handleClose = () => {
    setOpenCart(false);
    onClose();
  };

  return (
    <>
      <Box position="relative" cursor="pointer" onClick={onOpen}>
        <ShoppingCart />
        {cart.itemTotal > 0 && (
          <Box
            background="red"
            borderRadius="100%"
            w="18px"
            h="18px"
            color="#fff"
            position="absolute"
            top="0"
            right="-10px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="9px">{cart.itemTotal}</Text>
          </Box>
        )}
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={handleClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <Box
            onClick={handleClose}
            cursor="pointer"
            position="absolute"
            right="15px"
            top="20px"
          >
            <X />
          </Box>
          <DrawerHeader>Your Cart</DrawerHeader>
          <DrawerBody>
            {cart.items.length
              ? cart.items.map((product) => (
                  <CartItem
                    product={product}
                    removeProduct={removeFromCart}
                    updateQuantity={updateQuantity}
                    key={product.title + product.id}
                  />
                ))
              : null}
          </DrawerBody>

          <DrawerFooter
            justifyContent="flex-start"
            flexDirection="column"
            alignItems="flex-start"
            w="100%"
          >
            <Button
              display="block"
              w="100%"
              borderRadius="0"
              background="#000"
              color="#fff"
              fontSize="xl"
              fontWeight="bold"
              h="50px"
            >
              Checkout{" "}
              {getTotalPrice(cart.items)
                ? `$${getTotalPrice(cart.items).toFixed(2)}`
                : null}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
