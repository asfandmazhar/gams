import React, { useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import { Arrow } from "@/components/icons/icons";

export default function PaymentBox() {
  const [showPrice, setShowPrice] = useState(false);
  const boxRef = useRef(null);

   useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setShowPrice(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={boxRef} className="custom-rounded bordered shadow-xl p-6 w-full h-fit">
      <div
        className={`
          space-y-6 mb-10 mt-6 
          ${showPrice ? "block" : "hidden"}  
          lg:block                           
        `}
      >
        <div className="flex justify-between items-center">
          <h5>Subtotal : </h5>
          <span>$34.69</span>
        </div>
        <div className="flex justify-between items-center">
          <h4>Total : </h4>
          <div className="flex flex-col items-center">
            <h3 className="!text-xl sm:!text-2xl">$34.69</h3>
            <span className="text-sm px-2 py-1 bg-[var(--hover-color)]/20 w-fit rounded">
              $5.79/mo
            </span>
          </div>
        </div>
      </div>
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setShowPrice(!showPrice)}
      >
        <Button buttonName="Join Now" />
        <div className={`flex items-center gap-2 lg:hidden ${showPrice ? "hidden" : "block"} `}>
          <h3 className="!text-xl sm:!text-2xl">$34.69</h3>
          <Arrow className={`w-6 h-6 ${showPrice ? "rotate-180" : ""}`} />
        </div>
      </div>
    </div>
  );
}
