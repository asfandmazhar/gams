import React from "react";
import { CheckCircle } from "@/components/icons/icons";

const WorkItems = [
  {
    title:
      "Recharge Service: Activate Individual premium to your own account! Only on GamsGo!",
  },
  {
    title:
      "Private Premium Subscription. Your playlists can be migrated to keep all your favorites and lists",
  },
  {
    title:
      "1 slot (Personal): Account assigned by GamsGo, different account information for each person",
  },
  {
    title: "Official subscription",
  },
  {
    title: "After-sales support, worry-free refund",
  },
];

export default function HowItWork() {
  return (
    <div className="space-y-3 lg:space-y-4">
      <h3>How it work</h3>
      {WorkItems.map((point, index) => (
        <div
          key={index}
          className="flex items-start space-x-2 lg:space-x-3 shadow-sm px-4 py-6 custom-rounded"
        >
          <div className="flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 fill-[var(--error-color)]" />
          </div>
          <p>{point.title}</p>
        </div>
      ))}
    </div>
  );
}
