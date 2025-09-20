/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/Products/ProductCard";
import React from "react";

const ProductsPage = async () => {
  const data = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await data.json();

  return (
    <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto mt-10">
      {products?.map((product: any) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsPage;
