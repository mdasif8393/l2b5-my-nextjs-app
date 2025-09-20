/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const ProductCard = ({ product }: any) => {
  console.log(product);
  return (
    <div>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product?.productName}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-xl">
          {product?.brand}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-xl">
          {product?.category}
        </p>
      </a>
    </div>
  );
};

export default ProductCard;
