"use client";

import React from "react";

export default function Button({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`bg-blue-500 px-4 py-1.5 rounded-md text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
