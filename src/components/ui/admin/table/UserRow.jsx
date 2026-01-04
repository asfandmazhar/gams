import React from "react";
import Link from "next/link";

export default function UserRow({
  num,
  username,
  fullname,
  email,
  productName,
  paymentId,
  paymentMethod,
  paymentQuery,
  planBuy,
  role,
  date,
  columns = [],
}) {
  return (
    <tr className="hover:bg-[var(--admin-bg-gray)]/60 even:bg-[var(--admin-bg-gray)]">
      {columns.includes("num") && <td className="p-4">{num}</td>}
      {columns.includes("username") && (
        <td className="p-4">
          <Link href={""} className="link lowercase">
            @{username}
          </Link>
        </td>
      )}
      {columns.includes("fullname") && (
        <td className="p-4">
          <Link href={""} className="link capitalize whitespace-nowrap">
            {fullname}
          </Link>
        </td>
      )}
      {columns.includes("email") && (
        <td className="p-4">
          <Link href={""} className="link lowercase">
            {email}
          </Link>
        </td>
      )}
      {columns.includes("productName") && (
        <td className="p-4">
          <Link href={""} className="link lowercase">
            {productName}
          </Link>
        </td>
      )}
      {columns.includes("paymentId") && (
        <td className="p-4">
          <Link href={""} className="link lowercase">
            {paymentId}
          </Link>
        </td>
      )}
      {columns.includes("paymentMethod") && (
        <td className="p-4">
          <Link href={""} className="link lowercase">
            {paymentMethod}
          </Link>
        </td>
      )}
      {columns.includes("paymentQuery") && (
        <td className="p-4">
          <Link href={""} className="link lowercase">
            {paymentQuery}
          </Link>
        </td>
      )}
      {columns.includes("planBuy") && (
        <td className="p-4">
          <Link href={""} className="link lowercase">
            {planBuy}
          </Link>
        </td>
      )}
      {columns.includes("date") && <td className="p-4 uppercase">{date}</td>}
      {columns.includes("role") && (
        <td className="p-4">
          <select className="bg-[var(--admin-bg-gray)] px-4 py-2 rounded-lg uppercase cursor-pointer">
            <option value={role ? "admin" : "user"}>
              {role ? "admin" : "user"}
            </option>
            <option value={!role ? "admin" : "user"}>
              {!role ? "admin" : "user"}
            </option>
          </select>
        </td>
      )}
      <td className="p-4 whitespace-nowrap space-x-2">
        <button className="danger-link">Delete</button>
      </td>
    </tr>
  );
}
