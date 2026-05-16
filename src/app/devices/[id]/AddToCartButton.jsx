"use client";
import { useCart } from "@/app/context/CartContext";

export default function AddToCartButton({ device }) {
  const { addToCart } = useCart();

  return (
    <button
      className="w-full bg-gray-900 text-white py-4 rounded-2xl font-medium text-sm hover:bg-gray-700 transition-colors duration-200"
      onClick={() => addToCart(device)}
    >
      Add To Cart
    </button>
  );
}
