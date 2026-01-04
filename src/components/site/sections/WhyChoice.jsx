import React from "react";
import Container from "@/components/site/layout/Container";
import WhyChoiceCard from "@/components/ui/site/card/whyChoiceCard";

export default function WhyChoice() {
  return (
    <section>
      <Container>
        <div className="text-center pb-10 md:pb-12">
          <h2>
            Why
            <span className="text-[var(--navigation-color)] px-2">
              more and more
            </span>
            people use
            <span className="text-[var(--navigation-color)] px-2">games?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <WhyChoiceCard />
        </div>
      </Container>
    </section>
  );
}
