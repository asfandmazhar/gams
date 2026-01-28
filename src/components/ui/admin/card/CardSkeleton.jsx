import React from "react";

export default function CardSkeleton() {
  return (
    <div className="glass-btn !rounded-xl py-8 space-y-4 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="h-4 w-24 bg-white/10 rounded" />
        <div className="h-5 w-5 bg-white/10 rounded" />
      </div>

      <div className="h-8 w-20 bg-white/10 rounded" />

      <div className="h-4 w-32 bg-white/10 rounded" />
      <div className="h-4 w-24 bg-white/10 rounded" />
    </div>
  );
}
