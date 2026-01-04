"use client";

import { useState } from "react";
import { Cross } from "@/components/icons/icons";
import Button from "@/components/ui/site/button/Button";
import DatePicker from "@/components/ui/site/subscription/DatePicker";

export function FilterModal({ isOpen, onClose }) {
  const [purchaseTime, setPurchaseTime] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [subscriptionType, setSubscriptionType] = useState("");

  if (!isOpen) return null;

  const handleApplyFilters = () => {
    console.log({ purchaseTime, startTime, endTime, subscriptionType });
    onClose();
  };

  const handleClearFilters = () => {
    setPurchaseTime(undefined);
    setStartTime(undefined);
    setEndTime(undefined);
    setSubscriptionType("");
  };

  return (
    <div className="fixed inset-0 bg-[var(--font-color)]/50 bg-opacity-50 flex md:items-center md:justify-center items-end z-50">
      <div
        className="bg-[var(--navigation-font-color)] custom-rounded shadow-xl w-full relative p-4 md:p-6 rounded-t-2xl md:rounded-xl z-10 md:w-[90%] md:max-w-xl h-auto overflow-y-auto"
      >
        <div className="flex items-center justify-between">
          <h2>Filters</h2>
          <button onClick={onClose} className="cursor-pointer">
            <Cross className="h-8 w-8" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 mt-6">
          <div>
            <h4 className="mb-2">Purchase time</h4>
            <DatePicker
              placeholder="Purchase time"
              value={purchaseTime}
              onChange={setPurchaseTime}
            />
          </div>

          <div>
            <h4 className="mb-2">Start time</h4>
            <DatePicker
              placeholder="Start time"
              value={startTime}
              onChange={setStartTime}
            />
          </div>

          <div>
            <h4 className="mb-2">End time</h4>
            <DatePicker
              placeholder="End time"
              value={endTime}
              onChange={setEndTime}
            />
          </div>

          <div>
            <h4 className="mb-2">Subscription type</h4>
            <select
              value={subscriptionType}
              onChange={(e) => setSubscriptionType(e.target.value)}
              className="w-full bordered rounded-md p-2"
            >
              <option value="">Please select subscription type</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
              <option value="trial">Trial</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6">
          <Button buttonName={"Clear all"} onClick={handleClearFilters} className={"!w-fit"} />
          <div className="flex gap-3">
            <Button buttonName={"Cancel"} variant="outline" onClick={onClose} />
            <Button
              buttonName={"Apply filters"}
              onClick={handleApplyFilters}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
