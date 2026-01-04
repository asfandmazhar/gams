"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/admin/layout/Container";
import AnimationWrapper from "@/common/PageAnimation";
import Card from "@/components/ui/admin/card/Card";
import { Payment, Users, Orders, Browser, Plus } from "@/components/icons/icons";

export default function page() {
  return (
    <AnimationWrapper>
      <section>
        <Container className={"space-y-6"}>
          <h4 className="!text-[var(--navigation-font-color)] mt-8">Overview</h4>
          {/* Cards */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-6">
            <Card
              heading={"Payment"}
              total={123123}
              link={"/admin/payment"}
              icon={Payment}
            />
            <Card
              heading={"Users"}
              total={891239}
              link={"/admin/user"}
              icon={Users}
            />
            <Card
              heading={"Orders"}
              total={4231232}
              link={"/admin/orders"}
              icon={Orders}
            />
            <Card
              heading={"Product"}
              total={4231232}
              link={"/admin/product"}
              icon={Browser}
            />
          </div>
          <h4 className="!text-[var(--navigation-font-color)]">Add New</h4>
          <div className="flex w-full justify-between items-center gap-4 lg:flex-row flex-col">
            <Link href={"/admin/addProductData"} className="gradient-bg group">
              <Plus className={"w-10 md:w-12 h-10 md:h-12 my-4 md:my-6 group-hover:scale-110 group-hover:hidden fill-[var(--navigation-font-color)]"}/>
              <span className="hidden group-hover:block text-2xl font-bold uppercase my-4 md:my-8">
                Website
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </AnimationWrapper>
  );
}
