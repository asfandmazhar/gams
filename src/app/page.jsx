"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

// Lazy imports for website sections
const HeroSection = dynamic(() => import("@/components/site/sections/HeroSection"));
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

      {/* Temporary Admin Button */}
      <div className="text-center mt-10">
        <Link
          href="/admin"
          className="px-6 py-3 bg-green-600 text-white rounded-lg"
        >
          Go to Admin Panel
        </Link>
      </div>
    </>
  );
}
