"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartDrawer from "./cartDrawer";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();
  return (
    <>
      <nav className="w-full bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link
          href="/"
          className="text-gray-900 font-semibold text-xl tracking-tight"
        >
          Hardware Market
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/devices"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            Devices
          </Link>
          <Link
            href="/services"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            About Us
          </Link>
        </div>

        <button className="relative" onClick={() => setIsOpen(true)}>
          <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
            🛒
          </div>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
              {totalItems}
            </span>
          )}
        </button>
      </nav>
      <CartDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative"
      />
    </>
  );
}
