import React from "react";
import UserRow from "@/components/ui/admin/table/PaymentRow";

export default function Payment() {
  return (
    <div className="flex flex-col gap-6 w-full mt-4 md:mt-6">
      <div className={`w-full my-4 overflow-x-auto block`}>
        <table className="min-w-full">
          <thead className="bg-[var(--admin-bg-gray)] text-[var(--navigation-font-color)]">
            <tr>
              <th className="whitespace-nowrap p-4 uppercase text-left">#</th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                Username
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                email
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                product name
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                payment id
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                payment method
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                payment query
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
            <UserRow
              num={1}
              username={"asfand93"}
              email={"asfandmazhar@gmail.com"}
              productName={"spotify"}
              paymentId={"2124as1c2a1c5424"}
              paymentMethod={"paypal"}
              paymentQuery={"received"}
              date={"11 sep, 2025"}
              columns={[
                "num",
                "username",
                "email",
                "productName",
                "paymentId",
                "paymentMethod",
                "paymentQuery",
                "date",
                "operation",
              ]}
            />
            <UserRow
              num={2}
              username={"asfand93"}
              email={"asfandmazhar@gmail.com"}
              productName={"spotify"}
              paymentId={"2124as1c2a1c5424"}
              paymentMethod={"paypal"}
              paymentQuery={"received"}
              date={"11 sep, 2025"}
              columns={[
                "num",
                "username",
                "email",
                "productName",
                "paymentId",
                "paymentMethod",
                "paymentQuery",
                "date",
                "operation",
              ]}
            />
          </tbody>
        </table>
      </div>

      <div className="w-full flex justify-center items-center">
        <button className="glass-btn capitalize">Load more</button>
      </div>
    </div>
  );
}
