import React from "react";
import Product from "./Product";
import products from "@/db/products";

function ProductsSection() {
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="flex justify-center">Our Products</h1>

      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <Product
            key={product.id}
            productId={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
