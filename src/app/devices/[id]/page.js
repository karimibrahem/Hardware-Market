import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
export default async function DevicesDetails({ params }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const device = await res.json();

  const isInStock = device.availabilityStatus === "In Stock";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-5">
        <Link
          href="/devices"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors duration-200"
        >
          ← Back to Devices
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <div className="w-full h-96 bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <img
                src={device.images[0]}
                alt={device.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {device.images[1] && (
                <div className="h-44 bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <img
                    src={device.images[1]}
                    alt={device.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              {device.images[2] && (
                <div className="h-44 bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <img
                    src={device.images[2]}
                    alt={device.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                {device.category}
              </p>
              <h1 className="text-3xl font-semibold text-gray-900 leading-snug">
                {device.title}
              </h1>
            </div>

            <p className="text-gray-400 text-base leading-relaxed">
              {device.description}
            </p>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-gray-900">
                ${device.price}
              </span>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  isInStock
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-500"
                }`}
              >
                {device.availabilityStatus}
              </span>
            </div>

            <AddToCartButton device={device} />
          </div>
        </div>
      </div>
    </div>
  );
}
