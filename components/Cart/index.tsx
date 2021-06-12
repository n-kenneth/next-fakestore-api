import useCart from "../../hooks/useCart";
import { ShoppingCart, X } from "react-feather";
import {
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import CartItem from "../CartItem";
import { useEffect, useState } from "react";
import { getTotalPrice } from "../../lib/utilities";

const Cart = () => {
  const { cart } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (cart.itemTotal !== 0) {
      console.log(cart);
      onOpen();
    }
  }, [cart]);

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
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <Box
            onClick={onClose}
            cursor="pointer"
            position="absolute"
            right="15px"
            top="20px"
          >
            <X />
          </Box>
          <DrawerHeader>Your Cart</DrawerHeader>
          <DrawerBody>
            {cart.items.length &&
              cart.items.map((product) => <CartItem product={product} />)}
          </DrawerBody>

          <DrawerFooter>
            <Text>Total: ${getTotalPrice(cart.items)}</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
