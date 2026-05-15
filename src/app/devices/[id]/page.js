export default async function DevicesDetails({ params }) {
  const { id } = await params;
  return <div className="text-black">product id: {id}</div>;
}
