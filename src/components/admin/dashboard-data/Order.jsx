import React from "react";
import OrderRow from "@/components/ui/admin/table/OrderRow";

export default function Order() {
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
                fullname
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                email
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                product name
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                payment method
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                plan buy
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                date
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                role
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                Operation
              </th>
            </tr>
          </thead>
          <tbody>
            <OrderRow
              num={1}
              username={"asfand93"}
              fullname={"asfand mazhar"}
              email={"asfandmazhar@gmail.com"}
              paymentMethod={"paypal"}
              productName={"ChatGPT"}
              planBuy={"3 months"}
              role={true}
              date={"11 sep, 2025"}
              columns={[
                "num",
                "username",
                "fullname",
                "email",
                "paymentMethod",
                "productName",
                "planBuy",
                "role",
                "date",
                "operation",
              ]}
            />
            <OrderRow
              num={2}
              username={"asfandmazhar93"}
              fullname={"asfand mazhar"}
              email={"asfandmazhar93@gmail.com"}
              paymentMethod={"stripe"}
              productName={"spotify"}
              planBuy={"1 months"}
              role={false}
              date={"11 sep, 2025"}
              columns={[
                "num",
                "username",
                "fullname",
                "email",
                "paymentMethod",
                "productName",
                "planBuy",
                "role",
                "date",
                "operation",
              ]}
            />
            <OrderRow
              num={3}
              username={"asfandmazhar93"}
              fullname={"asfand mazhar"}
              email={"asfandmazhar93@gmail.com"}
              paymentMethod={"Google pay"}
              productName={"netflix"}
              planBuy={"12 months"}
              role={false}
              date={"11 sep, 2025"}
              columns={[
                "num",
                "username",
                "fullname",
                "email",
                "paymentMethod",
                "productName",
                "planBuy",
                "role",
                "date",
                "operation",
              ]}
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
