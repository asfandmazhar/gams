"use client";

import React, { useState } from "react";
import Button from "@/components/ui/site/button/Button";
import Link from "next/link";
import { Arrow, Tick } from "@/components/icons/icons";
import Payment from "@/components/ui/site/payment/PaymentPopup";

export default function categoryContentDetails({ details, brandColor, slug }) {
  const [showAll, setShowAll] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div className={`mt-2 custom-rounded p-6 bordered ${brandColor}`}>
      <ul className="space-y-2 text-sm">
        {(showAll ? details : details.slice(0, 3))?.map((point, index) => (
          <li key={index} className="flex items-center gap-2">
            <div>
              <Tick className="w-4 h-4 fill-[var(--navigation-color)]" />
            </div>
            <span
              className={`text-[var(--font-color)]/80 text-sm ${
                showAll ? "" : "line-clamp-1"
              }`}
            >
              {point}
            </span>
          </li>
        ))}
      </ul>

      {details.length > 3 && (
        <div
          className={`flex items-center justify-center gap-2 mt-4 cursor-pointer transition-transform duration-300 fill-[var(--navigation-color)] ${
            showAll ? "rotate-180" : ""
          }`}
          onClick={() => setShowAll(!showAll)}
        >
          <div>
            <Arrow className="w-6 h-6 opacity-40" />
            <Arrow className="w-6 h-6 -mt-4 " />
          </div>
        </div>
      )}

      <div className="my-4 border-bottom"></div>

      <Button
        buttonName="Purchase Now"
        onClick={() => setIsPaymentOpen(true)}
      />

      <div className="text-center mt-2">
        <Link
          href={`/details/${slug}`}
          className="text-[var(--navigation-color)] text-sm md:text-base hover:underline"
        >
          View more details
        </Link>
      </div>

      {/* Payment Popup */}
      <Payment isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
    </div>
  );
}
