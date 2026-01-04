import React from "react";
import { Plan, Quick, SSLIcon, LiveSupport, Affordable, Refound } from "@/components/icons/icons";

const data = [
  {
    icon: <Plan className={`w-5 h-5 md:w-8 md:h-8`} />,
    title: "Real-time delivery",
    description:
      "Real-time delivery after payment without waiting, fast arrival to dispel your worries",
  },
  {
    icon: <Quick className={`w-5 h-5 md:w-8 md:h-8`} />,
    title: "QUICK RESET PASSKEY",
    description:
      "Click reset passkey on the subscription page without waiting and manual operation",
  },
  {
    icon: <SSLIcon className={`w-5 h-5 md:w-8 md:h-8`} />,
    title: "SSL CERTIFICATE",
    description:
      "Payments take place in a secure environment with an SSL security certificate",
  },
  {
    icon: <LiveSupport className={`w-5 h-5 md:w-8 md:h-8`} />,
    title: "24/7 LIVE SUPPORT",
    description:
      "GamsGo provides 24/7 online private customer service, help you have a good experience",
  },
  {
    icon: <Affordable className={`w-5 h-5 md:w-8 md:h-8`} />,
    title: "AFFORDABLE PREMIUM",
    description:
      "Get premium subscription at lower price.",
  },
  {
    icon: <Refound className={`w-5 h-5 md:w-8 md:h-8`} />,
    title: "REFUND GUARANTEE",
    description:
      "We offer buyer protection, with refunds available within 24 hours.",
  },
];

export default function WhyChoiceCard() {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`group flex items-center gap-4 md:gap-8 hover:shadow-lg shadow-sm p-4 md:p-10 custom-rounded transition-all duration-300`}
        >
          <div className="bg-[var(--muted-background-color)] group-hover:bg-[var(--navigation-color)] p-5 rounded-full shadow-md transition-colors duration-300">
            <div className="fill-[var(--navigation-color)] group-hover:fill-[var(--navigation-font-color)] transition-colors duration-300">
              {item.icon}
            </div>
          </div>
          <div className="space-y-3">
            <h3>
              {item.title}
            </h3>
            <p>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
