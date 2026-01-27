"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Bell, Search, Cross } from "@/components/icons/icons";
import Button from "@/components/ui/admin/button/Button";
import Container from "@/components/admin/layout/Container";

export default function Navbar({ setIsOpen }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <nav className="py-4 md:py-3 sticky z-40 bg-[var(--admin-bg-color)] top-0 border-b">
        <Container>
          <div className="flex justify-between items-center">
            <div className="hidden md:flex flex-col">
              <span className="capitalize btn-shine">Hi Admin!</span>
              <h1 className="!text-3xl capitalize !text-[var(--navigation-font-color)] !font-[var(--font-roboto)] !leading-[35px]">
                welcome back
              </h1>
            </div>
            <Link href={"/admin"}>
              <h1 className="!text-3xl !text-[var(--navigation-font-color)] !w-fit flex md:!hidden">
                Games
              </h1>
            </Link>
            <div className="flex items-center gap-4">
              <div
                className={`w-full lg:w-72 left-0 z-50 lg:static absolute bg-[var(--admin-bg-color)] h-full flex gap-3 justify-center items-center px-4 lg:px-0 ${
                  showSearch ? "scale-100" : "scale-0 lg:scale-100"
                }`}
              >
                <div className="gap-2 items-center h-14 rounded-full glass-effect px-6 w-full flex">
                  <Search
                    className={
                      "w-4 md:w-5 h-4 md:h-5 fill-[var(--navigation-font-color)]/70"
                    }
                  />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent w-full h-full outline-none pl-1"
                  />
                </div>
                <Button
                  onClick={() => setShowSearch(false)}
                  icon={Cross}
                  className={"lg:hidden flex justify-center items-center"}
                />
              </div>
              <Button
                onClick={() => setShowSearch(!showSearch)}
                icon={Search}
                className={"lg:hidden flex justify-center items-center"}
              />
              <Button icon={Bell} className={"hidden md:flex"} />
              <button className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 cursor-pointer hover:brightness-90">
                <Image
                  width={16}
                  height={16}
                  src={"/images/admin/profile/profile-image.jpg"}
                  alt="profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
              <Button
                onClick={() => setIsOpen(true)}
                icon={Menu}
                className={"flex lg:hidden"}
              />
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}
