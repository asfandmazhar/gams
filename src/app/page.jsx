"use client";
import dynamic from "next/dynamic";

// Lazy imports for website sections
const HeroSection = dynamic(
  () => import("@/components/site/sections/HeroSection"),
);
const WhyChoice = dynamic(() => import("@/components/site/sections/WhyChoice"));
const Faqs = dynamic(() => import("@/components/site/sections/Faqs"));
const Review = dynamic(() => import("@/components/site/sections/Review"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChoice />
      <Faqs />
      <Review />
    </>
  );
}
