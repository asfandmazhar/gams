import SearchResults from "@/components/ui/site/search/SearchResults";
import Filters from "@/components/ui/search/Filters";

export default async function SearchPage({ params }) {
  const { query } = params;

  // 🔹 API call (no-store for fresh results)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search?query=${query}`, { cache: "no-store" });
  const data = await res.json();

  return (
    <div className="container mx-auto py-6 grid grid-cols-4 gap-6">
      <aside className="col-span-1">
        <Filters />
      </aside>
      <main className="col-span-3">
        <h1 className="text-2xl font-bold mb-4">Results for "{query}"</h1>
        <SearchResults results={data} />
      </main>
    </div>
  );
}
