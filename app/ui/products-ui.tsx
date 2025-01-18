"use client";

import React from "react";
import { Product } from "../lib/product-interface";

export default function ProductsUi({ products }: { products: Product[] }) {
  function addToCart() {}

  return (
    <>
      {products.map((product) => (
        <div
          className="flex flex-col"
          key={product.id}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover"
          />

          <div className="flex flex-col gap-2 ">
            <div className="flex flex-col gap-2 group">
              <h2 className="text-lg font-medium text-gray-700 mt-4 line-clamp-1  group-hover:underline underline-offset-4 ">
                {product.title}
              </h2>
              <p className="text-sm text-gray-500">${product.price} </p>
            </div>
            <button
              onClick={addToCart}
              className="bg-blue-500 text-white px-5 py-1.5 rounded-md"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
