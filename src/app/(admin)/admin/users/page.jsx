import React from "react";
import AnimationWrapper from "@/common/PageAnimation";
import UserData from "@/components/admin/dashboard-data/User";
import Container from "@/components/admin/layout/Container";
export default function page() {
  return (
    <AnimationWrapper>
      <Container>
        <section className="mt-8">
          <h4 className="!text-[var(--navigation-font-color)] my-8">User</h4>
          <UserData />
        </section>
      </Container>
    </AnimationWrapper>
  );
}
