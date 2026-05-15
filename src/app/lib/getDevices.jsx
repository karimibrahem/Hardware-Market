export default async function getDevices() {
  const res = await fetch("https://dummyjson.com/products/category/laptops");
  if (!res.ok) {
    throw new Error("fetch failed");
  }
  const data = await res.json();
  console.log(data);
  return data;
}
