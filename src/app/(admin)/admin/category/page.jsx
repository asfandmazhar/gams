import React from "react";
import AnimationWrapper from "@/common/PageAnimation";
import Container from "@/components/admin/layout/Container";
import CategoryRow from "@/components/admin/dashboard-data/Category";

export default function page() {
  return (
    <AnimationWrapper>
      <Container>
        <section className="mt-8">
          <h4 className="!text-[var(--navigation-font-color)] my-8">
            Add Category
          </h4>
          <div className="flex gap-6 w-full">
            <form
              action=""
              className="flex lg:flex-row flex-col items-center w-full gap-3"
            >
              <div className="w-96">
                <input
                  type="file"
                  accept=".svg"
                  className="input-box bg-[var(--admin-bg-gray)] !rounded-xl  cursor-pointer"
                />
              </div>
              <input
                type="text"
                className="input-box bg-[var(--admin-bg-gray)] !rounded-xl"
                placeholder="Enter Category Name"
              />
              <button className="glass-btn capitalize text-sm md:text-base xl:!pr-14 md:!py-4">
                Add Category
              </button>
            </form>
          </div>
          <hr className="border-b my-6" />
          <CategoryRow />
        </section>
      </Container>
    </AnimationWrapper>
  );
}
