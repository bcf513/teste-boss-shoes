import React from "react";
import Product from "./Product";

function ProductsSection() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="flex justify-center">Our Products</h1>

      <div className="grid grid-cols-3">
        <Product
          title="Green Airoo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price={78}
        />
        <Product
          title="Green Airoo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price={78}
        />
        <Product
          title="Green Airoo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price={78}
        />
        <Product
          title="Green Airoo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price={78}
        />
        <Product
          title="Green Airoo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price={78}
        />
        <Product
          title="Green Airoo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price={78}
        />
      </div>
    </div>
  );
}

export default ProductsSection;
