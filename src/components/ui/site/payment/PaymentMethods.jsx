"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../button/Button";
import { Arrow, Cross, Lock } from "@/components/icons/icons";

export default function PaymentMethods({ onBack, onClose, totalAmount }) {
  const [selectedMethod, setSelectedMethod] = useState("card1");

  const methods = [
    {
      id: "card1",
      title: "Credit & Debit Card",
      logos: [
        "/images/payment/visa.jpg",
        "/images/payment/master-card.jpg",
        "/images/payment/american-express.jpg",
        "/images/payment/jcb.jpg",
        "/images/payment/union-pay.jpg",
        "/images/payment/diners.jpg",
      ],
      tag: "One-time payment",
    },
    {
      id: "googlepay",
      title: "Google Pay",
      logos: ["/images/payment/g-pay.jpg"],
      tag: "One-time payment",
    },
  ];

  return (
    <div>
      <div className="border-bottom relative">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={onBack} className="cursor-pointer">
            <Arrow className={"w-6 h-6 rotate-90"} />
          </button>
          <h4>Select a Payment Method</h4>
        </div>

        <div className="flex space-x-2">
          <Lock className={"w-8 h-8 md:w-4 md:h-4 fill-[var(--navigation-color)]"} />
          <p className="!text-sm mb-4">
            We do not store your bank card info. Payments are processed securely
            by external providers.
          </p>
        </div>
        <div onClick={onClose} className="cursor-pointer">
          <Cross className={"w-8 h-8 absolute right-0 top-0"} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3 py-6 border-bottom">
        {methods.map((m) => (
          <div
            key={m.id}
            onClick={() => setSelectedMethod(m.id)}
            className={`border rounded-lg p-3 cursor-pointer space-y-4 ${
              selectedMethod === m.id
                ? "border-[var(--navigation-color)]"
                : "border-gray-300"
            }`}
          >
            <div className="flex items-center gap-4 relative">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only" />
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-white font-bold ${
                    selectedMethod === m.id
                      ? "bg-[var(--navigation-color)] border-[var(--navigation-color)]"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {selectedMethod && "✓"}
                </div>
              </label>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{m.title}</span>
                <span
                  className={`text-[10px] absolute -right-3 -top-3 ${
                    selectedMethod === m.id
                      ? "bg-[var(--navigation-color)] text-[var(--navigation-font-color)] px-4 py-1 rounded"
                      : "text-[var(--font-color)]/80 bg-[var(--muted-background-color)] px-4 py-1 rounded"
                  }`}
                >
                  {m.tag}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {m.logos.map((logo, idx) => (
                <Image
                  key={idx}
                  src={logo}
                  alt={m.title}
                  width={32}
                  height={20}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between py-6">
        <h4 className="font-semibold">Total:</h4>
        <h2 className="!text-[var(--navigation-color)] font-bold">
          {totalAmount}
        </h2>
      </div>

      <div className="flex justify-between gap-3">
        <Button
          onClick={onClose}
          buttonName="Cancel"
          className="!bg-[var(--muted-color)]/20 !text-[var(--font-color)] bordered"
        />
        <Button buttonName="Pay now" />
      </div>
    </div>
  );
}
