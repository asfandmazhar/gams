import React from "react";
import CategoryRow from "@/components/ui/admin/table/CategoryRow";

export default function Category() {
  return (
    <div className="flex flex-col gap-6 w-full mt-4 md:mt-6">
      <div className={`w-full my-4 overflow-x-auto block`}>
        <table className="min-w-full">
          <thead className="bg-[var(--admin-bg-gray)] text-[var(--navigation-font-color)]">
            <tr>
              <th className="whitespace-nowrap p-4 uppercase text-left">#</th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                icon
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                Category
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
            <CategoryRow
              num={1}
              icon={"music-alt"}
              child={"music"}
              date={"11 sep, 2025"}
            />
            <CategoryRow
              num={2}
              icon={"microchip-ai"}
              child={"Ai"}
              date={"11 sep, 2025"}
            />
          </tbody>
        </table>
      </div>

      <div className="w-full flex justify-center items-center">
        <button className="glass-btn capitalize text-sm md:text-base !px-6 md:!px-10 md:!py-4">Load more</button>
      </div>
    </div>
  );
}
