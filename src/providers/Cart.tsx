"use client";

import products from "@/db/products";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface CartContextProps {
  cart: ProductInCart[];
  addProduct: (productId: number) => void;
  removeProduct: (productId: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductInCart[]>([]);
  // 'isCartLoaded' é necessário para evitar que o carrinho seja sobrescrito com um carrinho vazio
  // ao recarregar a página por conta das race conditions entre os useEffects
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
      setIsCartLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isCartLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isCartLoaded]);

  function addProduct(productId: number) {
    if (!isCartLoaded) return;

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
    if (!isCartLoaded) return;

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
