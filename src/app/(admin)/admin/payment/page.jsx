import React from "react";
import AnimationWrapper from "@/common/PageAnimation";
import Payment from "@/components/admin/dashboard-data/Payment";
import Container from "@/components/admin/layout/Container";
export default function page() {
  return (
    <AnimationWrapper>
      <Container>
        <section className="mt-8">
          <h4 className="!text-[var(--navigation-font-color)] my-8">Payment</h4>
          <Payment />
        </section>
      </Container>
    </AnimationWrapper>
  );
}
