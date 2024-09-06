"use client";

import { useCartContext } from "@/providers/Cart";
import React from "react";
import Image from "next/image";

function CartModal({ closeModal }: Readonly<{ closeModal: () => void }>) {
  const { cart, addProduct, removeProduct } = useCartContext();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-3 md:p-6 lg:p-6 w-fit max-w-md relative text-black">
        {cart.length ? (
          <>
            <h1 className="text-center font-bold">Your Cart</h1>
            <table className="w-full border-collapse border-gray-200 text-xs md:text-base">
              <thead>
                <tr>
                  <th className="p-1 md:p-2 lg:p-2 text-left">Product</th>
                  <th className="p-1 md:p-2 lg:p-2 text-left">Price</th>
                  <th className="p-1 md:p-2 lg:p-2 text-left">Quantity</th>
                  <th className="p-1 md:p-2 lg:p-2 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td className="flex flex-col items-center gap-4 p-2 md:flex-row lg:flex-row">
                      <Image
                        className="h-10 w-10 drop-shadow-xl rounded-md bg-gray-200"
                        src={product.photo}
                        alt={product.name}
                        width={50}
                        height={50}
                      />
                      {product.name}
                    </td>
                    <td className=" p-2 whitespace-nowrap">
                      <p className="w-fit h-fit">
                        R$ {product.price.toFixed(2).replace(".", ",")}
                      </p>
                    </td>
                    <td className="p-2 flex items-center justify-center gap-2 ">
                      <button
                        className="w-6 h-6 rounded-full bg-gray-200 hover:bg-red-400"
                        onClick={() => removeProduct(product.id)}
                      >
                        -
                      </button>
                      <span className="text-center">{product.quantity}</span>
                      <button
                        className="w-6 h-6 rounded-full bg-gray-200 hover:bg-green-400"
                        onClick={() => addProduct(product.id)}
                      >
                        +
                      </button>
                    </td>

                    <td className=" p-2 whitespace-nowrap">
                      R${" "}
                      {(product.price * product.quantity)
                        .toFixed(2)
                        .replace(".", ",")}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} className=" p-2 text-right font-bold">
                    Total:
                  </td>
                  <td className=" p-2 whitespace-nowrap">
                    R${" "}
                    {cart
                      .reduce(
                        (acc, curr) => acc + curr.price * curr.quantity,
                        0
                      )
                      .toFixed(2)
                      .replace(".", ",")}
                  </td>
                </tr>
              </tfoot>
            </table>
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
