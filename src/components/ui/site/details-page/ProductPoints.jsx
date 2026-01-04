import React from "react";
import { Tick } from "@/components/icons/icons";

const ProductPoint = [
  {
    name: "Premium",
  },
  {
    name: "Renewal",
  },
  {
    name: "Passkey",
  },
  {
    name: "Pc, Mobile, Pad, Mac, Iphone, TV, XBox, Ps, Web",
  },
];

export default function ProductPoints() {
  return (
    <>
      <div className="flex items-center flex-wrap gap-4">
        {ProductPoint.map((point, index) => (
          <div key={index} className="flex items-center gap-1 md:gap-2 text-[var(--font-color)]/80">
            <Tick className={"w-3 md:w-4 h-3 md:h-4"} />
            <span className="text-sm md:text-base !text-[var(--font-color)]/80">{point.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
