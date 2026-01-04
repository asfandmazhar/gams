import React from "react";
import LanguageRow from "@/components/ui/admin/table/LanguageRow";

export default function Language() {
  return (
    <div className="flex flex-col gap-6 w-full mt-4 md:mt-6">
      <div className={`w-full my-4 overflow-x-auto block`}>
        <table className="min-w-full">
          <thead className="bg-[var(--admin-bg-gray)] text-[var(--navigation-font-color)]">
            <tr>
              <th className="whitespace-nowrap p-4 uppercase text-left">#</th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                Languages
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                date
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                Operation
              </th>
            </tr>
          </thead>
          <tbody>
            <LanguageRow num={1} languages={"English"} date={"11 sep, 2025"} />
            <LanguageRow num={2} languages={"German"} date={"11 sep, 2025"} />
          </tbody>
        </table>
      </div>

      <div className="w-full flex justify-center items-center">
        <button className="glass-btn capitalize text-sm md:text-base !px-6 md:!px-10 md:!py-4">Load more</button>
      </div>
    </div>
  );
}
