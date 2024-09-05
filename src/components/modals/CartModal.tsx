"use client";

import { useCartContext } from "@/providers/Cart";
import React from "react";

function CartModal({ closeModal }: Readonly<{ closeModal: () => void }>) {
  const { cart, addProduct, removeProduct } = useCartContext();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className=" rounded-lg shadow-lg p-6 w-full max-w-md relative">
        {cart.length ? (
          <>
            <h1>Your Cart</h1>
            <div className="flex justify-between">
              <h3>Product</h3>
              <h3>Price</h3>
            </div>
            {cart.map((product) => (
              <div className="flex justify-between" key={product.id}>
                <h3>{product.name}</h3>
                <div>
                  <button onClick={() => removeProduct(product.id)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => addProduct(product.id)}>+</button>
                </div>
                <h3>{product.price * product.quantity}</h3>
              </div>
            ))}
            <h1>
              Total:
              {cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}
            </h1>
          </>
        ) : (
          <h1>Your cart is empty!</h1>
        )}
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={closeModal}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default CartModal;
