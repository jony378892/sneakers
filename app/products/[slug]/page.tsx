import React from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";

export async function generateStaticParams() {}

export default function ProductDetail() {
  return (
    <div className="flex flex-wrap mt-10">
      <div className="w-full md:w-1/2 px-4 mb-8">
        <img src="/images/chair1.jpg" />
      </div>

      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-2">Premium Wireless Headphones</h2>
        <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
        <div className="mb-4">
          <span className="text-2xl font-bold mr-2">$349.99</span>
          <span className="text-gray-500 line-through">$399.99</span>
        </div>

        <p className="text-gray-700 mb-6">
          Experience premium sound quality and industry-leading noise
          cancellation with these wireless headphones. Perfect for music lovers
          and frequent travelers.
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Color:</h3>
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
            <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
            <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value="1"
            className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div className="flex space-x-4 mb-6">
          <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <FaCartPlus size={23} />
            Add to Cart
          </button>
          <button className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            <FaHeart size={23} />
            Wishlist
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Industry-leading noise cancellation</li>
            <li>30-hour battery life</li>
            <li>Touch sensor controls</li>
            <li>Speak-to-chat technology</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
