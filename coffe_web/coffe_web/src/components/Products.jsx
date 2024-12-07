import React from "react";
import ProductCard from "../layouts/ProductCard";

import { StoreProduct } from "../layouts/StoreProducts";
const Products = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-purple-50">
      <h2 className="font-semibold text-center text-4xl mb-8 ">
        Product Page
      </h2>
      <div className="className= grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-5 md:mx-36">
        {StoreProduct.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-12 justify-center"
          >
            <ProductCard img={item.image} name={item.name} prize={item.prize} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
