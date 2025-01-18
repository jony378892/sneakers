"use client";

import Link from "next/link";
import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import NavLinks from "../ui/nav-links";
import NavLink from "../ui/nav-link";

export default function Navbar() {
  const [isMenuVisible, setISMenuVisible] = useState(false);

  function handleMenu() {
    setISMenuVisible(!isMenuVisible);
  }

  return (
    <div className="flex justify-between items-center h-14 text-gray-800 relative mt-4">
      <Link
        href="/"
        className="text-2xl sm:text-3xl font-semibold"
      >
        DECORATUS
      </Link>
      <NavLinks className="sm:flex flex-row gap-5 items-center hidden" />
      <NavLink href="/login">Login</NavLink>
      <AiOutlineMenu
        size={23}
        onClick={handleMenu}
        className="sm:hidden cursor-pointer"
      />
      {isMenuVisible && (
        <div className="absolute flex flex-col gap-2 divide-y top-10 right-0 w-32 bg-white p-4 shadow-md">
          <NavLinks />
          <NavLink href="/login">Login</NavLink>
        </div>
      )}
    </div>
  );
}
