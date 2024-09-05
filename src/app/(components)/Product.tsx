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
    <div className="flex flex-col items-center pe-4 rounded-b-3xl p-4 backdrop-blur-sm bg-white/30">
      <Image
        className="h-50 w-50 drop-shadow-xl "
        src={photo}
        alt={id.toString()}
        width={500}
        height={500}
      />
      <h3 className="font-bold text-4xl">{name}</h3>
      <p>{description}</p>
      <div className="flex justify-between w-full items-center">
        <h3>R$ {price.toString()}</h3>
        <div
          className="border-spacing-4 border-solid border-white rounded-lg border-2 p-2"
          onClick={() => addProduct(id)}
        >
          <IoBagOutline />
        </div>
      </div>
    </div>
  );
}

export default Product;
