"use client";

import { useParams } from "next/navigation";
import CategoryTabs from "@/components/ui/site/category/CategoryTabs";
import CategoryContent from "@/components/ui/site/category/CategoryContent";

export default function CategorySlugPage() {
  const params = useParams();
  const slug = params.slug;

  return (
    <div>
      <CategoryTabs slug={slug} />
      <CategoryContent slug={slug} />
    </div>
  );
}
