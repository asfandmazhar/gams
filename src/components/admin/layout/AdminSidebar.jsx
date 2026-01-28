"use client";

import React from "react";
import Link from "next/link";
import SideBarLink from "./SideBarLink";
import Button from "@/components/ui/admin/button/Button";
import {
  Cross,
  Home,
  Browser,
  Users,
  Logout,
  Settings,
  Languages,
  Category,
  Faqs,
  Orders,
  Payment,
  Emails,
  Contact,
} from "@/components/icons/icons";

export default function AdminSidebar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`
        w-72 bg-[var(--admin-bg-color)] border-r z-50
        transition-transform duration-300 ease-in-out
        fixed top-0 left-0 lg:static
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      <div className="flex items-center justify-between lg:justify-center gap-4 p-4 md:p-3 lg:py-7 border-b">
        <div className="flex items-center gap-4">
          <Link href={"/admin"}>
            <h2 className="!text-3xl !text-[var(--navigation-font-color)]">
              GamsOn
            </h2>
          </Link>
        </div>

        <Button
          onClick={() => setIsOpen(false)}
          icon={Cross}
          className={"lg:hidden flex"}
        />
      </div>

      {/* Links */}
      <div className="mt-4 md:mt-8 flex flex-col items-start gap-2 px-6">
        <SideBarLink
          link="/admin/dashboard"
          icon={Home}
          text="Dashboard"
          setIsOpen={setIsOpen}
        />
        <SideBarLink
          link="/admin/product"
          icon={Browser}
          text="products"
          setIsOpen={setIsOpen}
        />
        <SideBarLink
          link="/admin/users"
          icon={Users}
          text="user"
          setIsOpen={setIsOpen}
        />
        <SideBarLink
          link="/admin/payment"
          icon={Payment}
          text="payment"
          setIsOpen={setIsOpen}
        />
        <SideBarLink
          link="/admin/orders"
          icon={Orders}
          text="order"
          setIsOpen={setIsOpen}
        />
        <SideBarLink
          link="/admin/faqs"
          icon={Faqs}
          text="faqs"
          setIsOpen={setIsOpen}
        />
        <hr className="border-b w-full rounded-full" />
        <SideBarLink
          link="/admin/category"
          icon={Category}
          text="category"
          setIsOpen={setIsOpen}
        />
        <SideBarLink
          link="/admin/languages"
          icon={Languages}
          text="languages"
          setIsOpen={setIsOpen}
        />
        <hr className="border-b w-full rounded-full" />
        <SideBarLink
          link="/admin/contact"
          icon={Contact}
          text="contact"
          setIsOpen={setIsOpen}
        />
        <SideBarLink
          link="/admin/emails"
          icon={Emails}
          text="email"
          setIsOpen={setIsOpen}
        />
        <hr className="border-b w-full rounded-full" />
        <SideBarLink
          link="/admin/setting"
          icon={Settings}
          text="setting"
          setIsOpen={setIsOpen}
        />
        <SideBarLink
          link="/admin/logout"
          icon={Logout}
          text="logout"
          setIsOpen={setIsOpen}
        />
      </div>
    </aside>
  );
}
