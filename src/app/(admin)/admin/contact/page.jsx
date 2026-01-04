import React from "react";
import AnimationWrapper from "@/common/PageAnimation";
import Container from "@/components/admin/layout/Container";
import ContactRow from "@/components/admin/dashboard-data/Contact";

export default function page() {
  return (
    <AnimationWrapper>
      <Container>
        <section className="mt-8">
          <h4 className="!text-[var(--navigation-font-color)] my-8">
            Contact
          </h4>
          <ContactRow />
        </section>
      </Container>
    </AnimationWrapper>
  );
}
