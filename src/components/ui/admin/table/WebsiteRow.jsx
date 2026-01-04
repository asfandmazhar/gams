import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function WebsiteRow({
  num,
  img,
  title,
  price,
  buyer,
  subscriptionDate,
  expiryDate,
}) {
  function FormatNumber(num) {
    if (num < 10) {
      return "" + num;
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "m";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    } else {
      return num.toLocaleString();
    }
  }
  return (
    <tr className="hover:bg-[var(--admin-bg-gray)]/60 even:bg-[var(--admin-bg-gray)]">
      <td className="p-4">{num}</td>
      <td className="p-4">
        <Link
          href={"/"}
          className="flex gap-4 items-center min-w-[250px] md:min-w-[300px] lg:min-w-[400px]"
        >
          <div className="w-14 h-14 md:w-20 md:h-20">
            <Image
              width={20}
              height={20}
              src={img}
              alt="netflix"
              className="object-contain w-full"
            />
          </div>
          <h5 className="capitalize hover:underline truncate max-w-[200px] md:max-w-[250px]">
            {title}
          </h5>
        </Link>
      </td>
      <td className="p-4">
        <Link href={"/"} className="link uppercase">
          {FormatNumber(price)}
        </Link>
      </td>
      <td className="p-4">
        <Link href={"/"} className="link uppercase">
          {FormatNumber(buyer)}
        </Link>
      </td>
      <td className="p-4 uppercase whitespace-nowrap">{subscriptionDate}</td>
      <td className="p-4 uppercase whitespace-nowrap">{expiryDate}</td>
      <td className="p-4 whitespace-nowrap space-x-2">
        <button className="link">Edit</button>
        <button className="danger-link">Delete</button>
      </td>
    </tr>
  );
}
