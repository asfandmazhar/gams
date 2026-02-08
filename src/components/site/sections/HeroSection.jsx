import React from "react";
import Container from "@/components/site/layout/Container";
import CategoryTabs from "@/components/ui/site/category/CategoryTabs";
import CategoryContent from "@/components/ui/site/category/CategoryContent";
import Button from "@/components/ui/site/button/Button";

export default function HeroSection({ searchParams }) {
  const slug = searchParams?.category || "all";

  return (
    <section>
      <Container>
        <div className="md:mx-auto pt-28 md:pt-36 lg:pt-42 pb-4 lg:w-[800px] w-full flex justify-center flex-col items-center">
          <div className="w-full text-center ">
            <h1>Shared premium subscription with lower price on GamsGo</h1>
            <p className="mt-4">
              Providing high-quality, affordable streaming for 6 Months
            </p>
          </div>
        </div>
        <CategoryTabs slug={slug} />
        <CategoryContent slug={slug} />
      </Container>
    </section>
  );
}
