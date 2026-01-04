import React from "react";
import AnimationWrapper from "@/common/PageAnimation";
import Container from "@/components/admin/layout/Container";
import LanguagesRow from "@/components/admin/dashboard-data/Language";

export default function page() {
  return (
    <AnimationWrapper>
      <Container>
        <section className="mt-8">
          <h4 className="!text-[var(--navigation-font-color)] my-8">
            Add Languages
          </h4>
          <div className="flex gap-6 w-full">
            <form
              action=""
              className="flex lg:flex-row flex-col items-center w-full gap-3"
            >
              <input
                type="text"
                className="input-box bg-[var(--admin-bg-gray)] !rounded-xl"
                placeholder="Enter Languages"
              />
              <button className="glass-btn capitalize text-sm md:text-base xl:!pr-12 md:!py-4">Add Languages</button>
            </form>
          </div>
          <hr className="border-b my-6" />
          <LanguagesRow />
        </section>
      </Container>
    </AnimationWrapper>
  );
}
