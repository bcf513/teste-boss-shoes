"use client";

import { useCartContext } from "@/providers/Cart";
import React from "react";
import { IoBagOutline } from "react-icons/io5";
import Image from "next/image";

function Product({
  product,
}: Readonly<{
  product: Product;
}>) {
  const { addProduct } = useCartContext();

  const { id, name, description, photo, price } = product;
  return (
    <div className="flex flex-col items-center gap-2 rounded-b-3xl p-6 bg-gradient-to-b from-transparent to-white/30 backdrop-blur-sm">
      <Image
        className="w-auto h-auto drop-shadow-xl "
        src={photo}
        alt={id.toString()}
        width={500}
        height={500}
      />
      <h3 className="font-bold text-4xl w-fit text-center">{name}</h3>
      <p className="text-center text-xs font-bold">{description}</p>
      <div className="flex justify-between w-full items-center">
        <h3>R$ {price.toString()}</h3>
        <button
          type="button"
          className="border-spacing-4 border-solid border-white rounded-lg border-2 p-2"
          onClick={() => addProduct(id)}
        >
          <IoBagOutline />
        </button>
      </div>
    </div>
  );
}

export default Product;
