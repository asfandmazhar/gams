import React from "react";
import BorderButton from "@/components/ui/site/button/BorderButton";

export default function TypeOptions({SelectType, selectedType, setSelectedType}) {

  return (
    <div className="space-y-2 relative">
      <h5>Select Type</h5>
      {SelectType.map((option, index) => (
        <BorderButton
          key={index}
          buttonName={option.name}
          onClick={() => setSelectedType(option.name)}
          className={`mr-4 ${
            selectedType === option.name ? "border-btn" : "muted-btn"
          }`}
        />
      ))}
    </div>
  );
}
