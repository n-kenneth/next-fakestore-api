import React, { createContext, useEffect, useState } from "react";
import { Product } from "../lib/api";

export interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  price: number;
  items: CartItem[];
  itemTotal: number;
}

interface CartContext {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContext>({} as CartContext);

export const CartProvider = ({
  children,
}: {
  children: React.ReactChild[];
}) => {
  const [cart, setCart] = useState<Cart>({ price: 0, items: [], itemTotal: 0 });
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart, openCart, setOpenCart }}>
      {children}
    </CartContext.Provider>
  );
};
