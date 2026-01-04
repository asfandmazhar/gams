import React from "react";
import AnimationWrapper from "@/common/PageAnimation";
import Order from "@/components/admin/dashboard-data/Order";
import Container from "@/components/admin/layout/Container";
export default function page() {
  return (
    <AnimationWrapper>
      <Container>
        <section className="mt-8">
          <h4 className="!text-[var(--navigation-font-color)] my-8">Order</h4>
          <Order />
        </section>
      </Container>
    </AnimationWrapper>
  );
}
