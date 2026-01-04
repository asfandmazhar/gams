import React from "react";
import ContactRow from "@/components/ui/admin/table/ContactRow";

export default function Contact() {
  return (
    <div className="flex flex-col gap-6 w-full mt-4 md:mt-6">
      {/* Templates */}
      <div className={`w-full my-4 overflow-x-auto block`}>
        <table className="min-w-full">
          <thead className="bg-[var(--admin-bg-gray)] text-[var(--navigation-font-color)]">
            <tr>
              <th className="whitespace-nowrap p-4 uppercase text-left">#</th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                email
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                title
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                message
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
            <ContactRow
              num={1}
              email={"asfandmazhar@gmail.com"}
              title={"asfand93"}
              message={"lorem"}
              date={"11 sep, 2025"}
            />
            <ContactRow
              num={2}
              email={"asfandmazhar93@gmail.com"}
              title={"asfandmazhar9"}
              message={"lorem"}
              date={"11 sep, 2025"}
            />
          </tbody>
        </table>
      </div>

      <div className="w-full flex justify-center items-center">
        <button className="glass-btn capitalize text-sm md:text-base !px-6 md:!px-10 md:!py-4">
          Load more
        </button>
      </div>
    </div>
  );
}
