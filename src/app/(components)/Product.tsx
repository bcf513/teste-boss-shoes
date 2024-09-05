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
    <div className="flex flex-col items-center pe-4">
      <h1>Foto</h1>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="flex justify-between w-full">
        <h3>Rs. {price.toString()}</h3>
        <IoBagOutline
          className="border-spacing-4 border-solid border-white border-2"
          onClick={() => addProduct(productId)}
        />
      </div>
    </div>
  );
}

export default Product;
