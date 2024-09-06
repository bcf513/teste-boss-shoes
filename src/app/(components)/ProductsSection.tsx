import React from "react";
import Product from "./Product";
import products from "@/db/products";

function ProductsSection() {
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="flex justify-center font-bold text-3xl">Our Products</h1>

      <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {" "}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
