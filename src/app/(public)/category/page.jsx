import CategoryTabs from "@/components/ui/site/category/CategoryTabs";

export default function CategoryPage({ searchParams }) {
  const slug = searchParams?.category || "all";

  return (
    <div>
      <CategoryTabs slug={slug} />
    </div>
  );
}
