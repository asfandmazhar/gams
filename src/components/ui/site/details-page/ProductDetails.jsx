"use client";

import React, { useState } from "react";
import Container from "@/components/site/layout/Container";
import PurchaseMonth from "../payment/PurchaseMonth";
import TypeOptions from "../payment/TypeOptions";
import Image from "next/image";
import PaymentBox from "../payment/PaymentBox";
import Button from "../button/BorderButton";
import Points from "./ProductPoints";
import BrandName from "./BrandName";
import WhyChoice from "./WhyChoose";
import Faqs from "./DetailsFaqs";
import HowItWork from "./HowItWork";

export default function ProductDetails() {
  const SelectType = [
    {
      name: "1 profile (Best Value) (Shared)",
    },
    {
      name: "Full Account",
    },
  ];

  const [selectedType, setSelectedType] = useState(SelectType[0].name);

  return (
    <div className="pt-28 md:pt-32 lg:pt-42">
      <Container>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="lg:flex lg:gap-16 mb-24 lg:mb-32">
              <div className="flex gap-6 mb-8">
                <Image
                  src="/images/category/shopify.jpg"
                  alt="Shopify"
                  width={250}
                  height={250}
                  className="rounded-2xl w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-48 object-cover"
                />
                <div className="block lg:hidden">
                  <div className="justify-end text-end mb-4 flex lg:hidden ">
                    <Button
                      buttonName="Share"
                      className={"muted-btn !text-xs md:!text-base"}
                    />
                  </div>
                  <p>
                    Netflix is a global leading streaming platform that offers a
                    variety of movies, TV shows, documentaries, and more.
                  </p>
                </div>
              </div>
              <div className="space-y-4 w-full">
                <div className="justify-end text-end mb-10 hidden lg:flex">
                  <Button buttonName="Share" className={"muted-btn"} />
                </div>
                <PurchaseMonth />
                <TypeOptions
                  SelectType={SelectType}
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                />
                <Points />
                <p>
                  Netflix is a global leading streaming platform that offers a
                  variety of movies, TV shows, documentaries, and more.
                </p>
              </div>
            </div>
            <BrandName />
            <WhyChoice />
          </div>
          <div>
            <div className="hidden lg:flex lg:mb-32">
              <PaymentBox />
            </div>
            <div className="space-y-20">
              <HowItWork />
              <Faqs className="!w-full" />
            </div>
          </div>
        </div>
      </Container>
      <div className="flex lg:hidden fixed bottom-0 w-full z-50 bg-[var(--muted-background-color)]">
        <PaymentBox />
      </div>
    </div>
  );
}
