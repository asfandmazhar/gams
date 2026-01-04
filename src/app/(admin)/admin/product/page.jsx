import React from "react";
import AnimationWrapper from "@/common/PageAnimation";
import ProductData from "@/components/admin/dashboard-data/Product";
import Container from "@/components/admin/layout/Container";
export default function page() {
  return (
    <AnimationWrapper>
      <Container>
        <section className="mt-8">
          <h4 className="!text-[var(--navigation-font-color)] my-8">
            Product
          </h4>
          <ProductData />
        </section>
      </Container>
    </AnimationWrapper>
  );
}
