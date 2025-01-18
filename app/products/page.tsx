import React from "react";
import ProductsUi from "../ui/products-ui";

export default async function Products() {
  const res = await fetch(`http://www.localhost:3000/api/products`);
  const products = await res.json();

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-10">Our Products</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-16 pb-20">
        <ProductsUi products={products} />
      </div>
    </>
  );
}
