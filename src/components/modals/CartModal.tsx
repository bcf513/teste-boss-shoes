"use client";

import { useCartContext } from "@/providers/Cart";
import React from "react";
import Image from "next/image";

function CartModal({ closeModal }: Readonly<{ closeModal: () => void }>) {
  const { cart, addProduct, removeProduct } = useCartContext();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative text-black">
        {cart.length ? (
          <>
            <h1>Your Cart</h1>
            <div className="flex justify-between">
              <h3>Product</h3>
              <h3>Price</h3>
            </div>
            <div className="flex flex-col gap-2">
              {cart.map((product) => (
                <div
                  className="flex justify-between items-center"
                  key={product.id}
                >
                  <Image
                    className="h-10 w-10 drop-shadow-xl rounded-md bg-gray-200"
                    src={product.photo}
                    alt={product.id.toString()}
                    width={500}
                    height={500}
                  />
                  <h3 className="w-24">{product.name}</h3>
                  <div className="flex gap-2">
                    <button
                      className="w-6 rounded-full bg-gray-200 hover:bg-red-400"
                      onClick={() => removeProduct(product.id)}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="w-6 rounded-full bg-gray-200 hover:bg-green-400"
                      onClick={() => addProduct(product.id)}
                    >
                      +
                    </button>
                  </div>
                  <h3>{product.price * product.quantity}</h3>
                </div>
              ))}
              <h1 className="flex justify-end">
                Total: R$
                {cart.reduce(
                  (acc, curr) => acc + curr.price * curr.quantity,
                  0
                )}
              </h1>
            </div>
          </>
        ) : (
          <h1 className="flex justify-center">Your cart is empty!</h1>
        )}
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-600 rounded-full bg-red-600 w-6"
          onClick={closeModal}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default CartModal;
