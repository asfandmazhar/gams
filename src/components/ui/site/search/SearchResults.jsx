export default function SearchResults({ results }) {
  if (!results.length) {
    return <p>No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {results.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg shadow">
          <h2 className="font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
