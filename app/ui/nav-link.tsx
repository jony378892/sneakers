"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();

  const className =
    "underline-offset-2 hover:underline decoration-violet-500 decoration-2 list-none";

  return (
    <Link
      href={href}
      className={`${className} ${path === href && "underline"}`}
    >
      {children}
    </Link>
  );
}
