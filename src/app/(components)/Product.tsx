"use client";

import { useCartContext } from "@/providers/Cart";
import React from "react";
import { IoBagOutline } from "react-icons/io5";

function Product({
  productId,
  title,
  description,
  price,
}: Readonly<{
  productId: number;
  title: string;
  description: string;
  price: number;
}>) {
  const { addProduct } = useCartContext();
  return (
    <div className="flex flex-col items-center pe-4 rounded-b-3xl p-4 bg-red-900">
      <h1>Foto</h1>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="flex justify-between w-full items-center">
        <h3>R$ {price.toString()}</h3>
        <div className="border-spacing-4 border-solid border-white rounded-lg border-2 p-2">
          <IoBagOutline onClick={() => addProduct(productId)} />
        </div>
      </div>
    </div>
  );
}

export default Product;
