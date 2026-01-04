import React from "react";
import AnimationWrapper from "@/common/PageAnimation";
import Container from "@/components/admin/layout/Container";

export default function page() {
  return (
    <AnimationWrapper>
      <Container>
        <section className="mt-8">
          <div className="flex justify-between items-center">
            <h4 className="!text-[var(--navigation-font-color)] my-8">
              all user email
            </h4>
            <button className="glass-btn capitalize text-sm md:text-base !px-6 !py-4"> Copy all emails</button>
          </div>
          <div className="bg-[var(--admin-bg-gray)] w-full rounded-xl my-6 h-96">
            <textarea
              className="bg-transparent p-4 w-full h-full"
              placeholder="Email not found!"
              defaultValue="asfand@gmail.com, asfandmazhar93@gmail.com asfand@gmail.com, asfandmazhar93@gmail.com"
              readOnly
            />
          </div>
        </section>
      </Container>
    </AnimationWrapper>
  );
}
