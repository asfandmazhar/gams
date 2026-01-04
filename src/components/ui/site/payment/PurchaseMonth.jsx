"use client"

import React, { useState } from "react";
import BorderButton from "@/components/ui/site/button/BorderButton";

export default function PurchaseMonth() {
  const PurchaseMonths = [
    {
      month: "1 month",
    },
    {
      month: "6 months",
    },
    {
      month: "12 months",
    },
  ];

  const [selectMonths, setSelectMonths] = useState(PurchaseMonths[0].month);
  return (
    <div className="space-y-2">
      <h5>Purchase months</h5>
      {PurchaseMonths.map((purchase, index) => (
        <BorderButton
          key={index}
          buttonName={purchase.month}
          onClick={() => setSelectMonths(purchase.month)}
          className={`mr-4 ${
            selectMonths === purchase.month ? "border-btn" : "muted-btn"
          }`}
        />
      ))}
    </div>
  );
}
