import getDevices from "../lib/getDevices";
import Link from "next/link";
export default async function Devices() {
  const data = await getDevices();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8 tracking-tight">
        Devices
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.products.map((item) => (
          <Link key={item.id} href={`/devices/${item.id}`}>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-full h-52 bg-gray-100 overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <h2 className="text-gray-900 font-medium text-base leading-snug mb-2 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
