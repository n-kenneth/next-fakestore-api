import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Product } from "../lib/api";
import { getTotalPrice, getTotalQuantity } from "../lib/utilities";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);
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
  };

  return { saveToCart, cart };
};

export default useCart;
