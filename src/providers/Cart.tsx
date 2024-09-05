"use client";

import products from "@/db/products";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface CartContextProps {
  cart: ProductInCart[];
  addProduct: (productId: number) => void;
  removeProduct: (productId: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductInCart[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    console.log("cart changed");
    localStorage.setItem("cart", JSON.stringify(cart));
    console.table(cart);
  }, [cart]);

  function addProduct(productId: number) {
    console.log("addProduct");
    console.log(productId);
    const productInCart = cart.find((p) => p.id === productId);
    if (productInCart) {
      setCart(
        cart.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      const productOnDatabase = products.find((p) => p.id === productId);
      if (!productOnDatabase) return;
      setCart([...cart, { ...productOnDatabase, quantity: 1 }]);
    }
  }

  function removeProduct(productId: number) {
    const productInCart = cart.find((p) => p.id === productId);
    if (productInCart?.quantity === 1) {
      setCart(cart.filter((p) => p.id !== productId));
    } else {
      setCart(
        cart.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
