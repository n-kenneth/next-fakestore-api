import { useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Product } from "../lib/api";
import { getTotalPrice, getTotalQuantity } from "../lib/utilities";

const useCart = () => {
  const { cart, setCart, openCart, setOpenCart } = useContext(CartContext);

  const saveToCart = (product: Product): void => {
    const newCart = { ...cart };
    const inCart = newCart.items.findIndex((item) => item.id === product.id);
    if (inCart !== -1) {
      newCart.items[inCart].quantity = newCart.items[inCart].quantity + 1;
    } else {
      const newProduct = { ...product, quantity: 1 };
      newCart.items.push(newProduct);
    }
    newCart.price = getTotalPrice(newCart.items);
    newCart.itemTotal = getTotalQuantity(newCart.items);
    setCart(newCart);
    setOpenCart(true);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeFromCart = (id: number): void => {
    const updatedCart = { ...cart };
    updatedCart.items = updatedCart.items.filter((item) => item.id !== id);
    updatedCart.itemTotal = getTotalQuantity(updatedCart.items);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id: number, action: string): void => {
    const updatedCart = { ...cart };
    const productIndex = updatedCart.items.findIndex((item) => item.id === id);
    console.log(id, action, productIndex);

    if (productIndex === -1) return;

    if (action === "add") {
      updatedCart.items[productIndex].quantity =
        updatedCart.items[productIndex].quantity + 1;
    } else if (action === "minus") {
      if (updatedCart.items[productIndex].quantity !== 1) {
        updatedCart.items[productIndex].quantity =
          updatedCart.items[productIndex].quantity - 1;
      }
    }
    setCart(updatedCart);
    updatedCart.itemTotal = getTotalQuantity(updatedCart.items);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return {
    saveToCart,
    cart,
    openCart,
    setOpenCart,
    removeFromCart,
    updateQuantity,
  };
};

export default useCart;
