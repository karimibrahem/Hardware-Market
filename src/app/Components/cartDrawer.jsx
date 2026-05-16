"use client";

import { useCart } from "../context/CartContext";

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, totalItems } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            Cart ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition text-gray-500"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-sm text-center mt-10">
              Your cart is empty
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center bg-gray-50 rounded-2xl p-3"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-300 hover:text-red-400 transition text-lg"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="px-6 py-5 border-t border-gray-100">
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-400">Total</span>
              <span className="text-lg font-semibold text-gray-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-gray-900 text-white py-4 rounded-2xl text-sm font-medium hover:bg-gray-700 transition-colors duration-200">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
