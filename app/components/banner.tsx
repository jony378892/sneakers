import Image from "next/image";
import React from "react";

import BannerImage from "@/public/images/chair8-removebg-preview.png";
import Button from "../ui/button";
import Link from "next/link";

export default function Banner() {
  return (
    <main className="flex items-center justify-center gap-5 bg-gradient-to-r to-violet-500 from-blue-500 w-full h-[420px] p-5 mt-7 rounded-lg ">
      <div className="flex flex-col gap-7 justify-left items-center sm:w-1/2">
        <p className="text-3xl xs:text-4xl font-bold leading-normal text-white">
          Decorate the <br /> way you want
        </p>
        <p className="text-white">
          Discover our latest collections, <br /> create your perfect space
        </p>
        <button className="text-violet bg-white px-5 py-1.5 rounded-md hover:bg-gray-100">
          EXPLORE MORE
        </button>
      </div>
      <div className="relative hidden md:block xl:mb-6">
        <Image
          src={BannerImage}
          alt="Banner Image"
          className=""
        />
        <Link href="/products">
          <button className="absolute bg-white  md:top-10 md:left-10 lg:top-20  px-5 py-1.5 text-black rounded-md hover:bg-gray-100">
            BUY NOW
          </button>
        </Link>
      </div>
    </main>
  );
}
