import React, { useRef, useEffect, useState } from "react";
import { Cross } from "@/components/icons/icons";
import Image from "next/image";
import Button from "../button/Button";
import TypeOptions from "./TypeOptions";
import PurchaseMonth from "./PurchaseMonth";
import PaymentMethods from "./PaymentMethods";

export default function PaymentPopup({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const [step, setStep] = useState("details");

  const SelectType = [
    {
      name: "1 profile (Best Value) (Shared)",
    },
    {
      name: "Full Account",
    },
  ];

  const [selectedType, setSelectedType] = useState(SelectType[0].name);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex md:items-center md:justify-center items-end">
      <div className="absolute inset-0 bg-[var(--font-color)]/50"></div>

      <div
        ref={modalRef}
        className="relative bg-white p-4 md:p-6 rounded-t-2xl md:rounded-xl shadow-lg z-10 
               w-full md:w-[90%] md:max-w-3xl 
               h-auto overflow-y-auto"
      >
        {step === "details" && (
          <>
            <div className="border-bottom relative">
              <div className="flex items-start gap-4 md:gap-10">
                <Image
                  width={96}
                  height={96}
                  src={"/images/category/shopify.jpg"}
                  alt={"/"}
                  className="rounded"
                />
                <div className="flex flex-col space-y-1">
                  <div>
                    <h3 className="mb-2 !text-2xl md:!text-3xl !text-[var(--theme-color)]">
                      <span className="text-xl">$</span>34.69{" "}
                      <del className="!text-gray-400 md:ml-2">
                        <span className="text-xl">$</span>119.94
                      </del>
                    </h3>
                  </div>
                  <span className="text-sm px-2 py-1 bg-[var(--hover-color)]/20 w-fit rounded">
                    $5.79/mo
                  </span>
                  <p className="mb-4 !text-sm mt-4">{selectedType}</p>
                </div>
              </div>
              <div onClick={onClose} className="cursor-pointer">
                <Cross className={"w-8 h-8 absolute right-0 top-0"} />
              </div>
            </div>

            <div className="flex flex-col space-y-4 my-4">
              {/* purchase months Option */}
              <PurchaseMonth />
              {/* select Option */}
              <TypeOptions
                SelectType={SelectType}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 py-4">
              <Button
                onClick={onClose}
                buttonName="Cancel"
                className="!bg-[var(--muted-color)]/20 !text-[var(--font-color)] bordered"
              />
              <Button onClick={() => setStep("methods")} buttonName="Go to payment" />
            </div>
          </>
        )}
        {step === "methods" && (
          <PaymentMethods
            onBack={() => setStep("details")}
            onClose={onClose}
            totalAmount="$67.39"
          />
        )}
      </div>
    </div>
  );
}
