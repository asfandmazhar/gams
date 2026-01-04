import React from "react";
import AnimationWrapper from "@/common/PageAnimation";
import Container from "@/components/admin/layout/Container";
import Faqs from "@/components/admin/dashboard-data/Faqs";
import GlobalFaqs from "@/components/ui/admin/GlobalFaqs";

const customFaqs = [
  {
    title: "What is Games",
    description:
      "Games is a website where you can share the cost of multi-account digital subscriptions.",
  },
  {
    title: "How to Share a Subscription?",
    points: [
      "Click on the '+' Share a subscription' next to the profile picture in the top right corner of the home page.",
      "Select the subscription you want to share.",
      "Select the plan that matches your subscription.",
      "Indicate how many slots you wish to share.",
      "Select if you are going to public your subscription",
      "Submit information of this subscription",
      "Now you can earn money once co-subscribers join in !",
    ],
  },
];
export default function page() {
  return (
    <AnimationWrapper>
      <Container>
        <h4 className="!text-[var(--navigation-font-color)] my-8">Faqs</h4>
        <section className="mt-8 space-y-6 flex flex-col justify-center items-center">
          <Faqs data={customFaqs} placeholder="Faq's" faqDescription="Faq's description" />
          <GlobalFaqs data={customFaqs} className={"w-full xl:w-4/6"} />
        </section>
      </Container>
    </AnimationWrapper>
  );
}
