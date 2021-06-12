import { createContext, useEffect, useState } from "react";
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
}

export const CartContext = createContext<CartContext>({} as CartContext);

export const CartProvider = ({
  children,
}: {
  children: React.ReactChild[];
}) => {
  const [cart, setCart] = useState<Cart>({ price: 0, items: [], itemTotal: 0 });

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
