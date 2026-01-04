"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DropdownMenu from "@/components/ui/admin/Dropdown";
import { Plus, Cross, Filter, Arrow } from "@/components/icons/icons";
import Button from "@/components/ui/admin/button/Button";
import WebsiteRow from "@/components/ui/admin/table/WebsiteRow";

export default function Product() {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [selectSort, setSelectSort] = useState("papular");
  const menuRef = useRef();

  const handleClickOutSide = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setSort(false);
      setFilter(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  useEffect(() => {
    if (filter) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [filter]);

  return (
    <>
      <Link href={"/admin/addProductData"} className="gradient-bg group">
        <Plus
          className={
            "w-10 md:w-12 h-10 md:h-12 my-4 md:my-6 group-hover:scale-110 group-hover:hidden fill-[var(--navigation-font-color)]"
          }
        />
        <span className="hidden group-hover:block text-2xl font-bold uppercase my-4 md:my-8">
          Add New Product
        </span>
      </Link>
      <div className="flex gap-6 w-full mt-4 md:mt-6">
        {/* Side Bar */}
        <div
          className={`
            space-y-4 p-6 md:rounded-xl h-2/3 overflow-y-auto scrollbar-hide md:h-fit md:sticky md:top-24 md:mb-20 md:w-2/12 fixed w-full z-20 left-0 rounded-t-3xl duration-500 transition-all ease-in-out md:glass-effect bg-gray no-scroll bg-[var(--admin-bg-color)] 
            ${filter ? "bottom-0" : " md:w-0 md:hidden -bottom-full "}`}
        >
          <Button
            Icon={Cross}
            onClick={() => setFilter(false)}
            className="md:hidden flex justify-center items-center float-right cursor-pointer glass-btn"
          />
          {/* Reset */}
          <div className="border-b pb-4">
            <button className="danger-link text-md ">Delete all</button>
          </div>

          {/* Categories */}
          <div>
            <h4 className="!text-[var(--navigation-font-color)] capitalize">
              Categories
            </h4>
            <ul className="space-y-2 mt-2">
              <li>
                <Link
                  href={"/"}
                  className="link text-light/80 hover:text-light text-base after:bg-light"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="link text-light/80 hover:text-light text-base after:bg-light"
                >
                  Ai
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="link text-light/80 hover:text-light text-base after:bg-light"
                >
                  Software
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="link text-light/80 hover:text-light text-base after:bg-light"
                >
                  Reading
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="link text-light/80 hover:text-light text-base after:bg-light"
                >
                  Learning
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Templates */}
        <div
          className={` ${filter ? " w-full md:w-10/12 " : "w-full"}`}
          ref={menuRef}
        >
          <div className="flex justify-between items-center relative">
            <div>
              <Button
                icon={Filter}
                onClick={() => setFilter(!filter)}
                className="glass-btn flex gap-2 scale-90 md:scale-100 active:scale-90 text-sm md:text-base !px-6 md:!px-6 md:!py-4"
                buttonName="filter"
              />
            </div>
            <div className="relative">
              <button
                className="glass-btn scale-90 md:scale-100 active:scale-90 text-sm md:text-base !px-6 md:!px-6 md:!py-4"
                onClick={() => setSort(!sort)}
              >
                <div className="flex justify-center items-center gap-2">
                  <span className="capitalize">{selectSort}</span>{" "}
                  <Arrow
                    className={`w-5 h-5 fill-[var(--navigation-font-color)] transition-all duration-500 ${
                      sort ? " rotate-180 mb-2" : " rotate-0 mt-2"
                    }`}
                  />
                </div>
              </button>

              <DropdownMenu
                isOpen={sort}
                className="right-0 mt-1 md:top-14 top-12 w-42"
              >
                <button
                  className="nav-link pl-4 pr-12 flex items-center gap-3"
                  onClick={() => {
                    setSelectSort("papular");
                    setSort(false);
                  }}
                >
                  Papular
                </button>
                <button
                  className="nav-link pl-4 pr-8 flex items-center gap-3"
                  onClick={() => {
                    setSelectSort("new");
                    setSort(false);
                  }}
                >
                  New
                </button>
                <button
                  className="nav-link pl-4 pr-8 flex items-center gap-3"
                  onClick={() => {
                    setSelectSort("new");
                    setSort(false);
                  }}
                >
                  1 Month
                </button>
                <button
                  className="nav-link pl-4 pr-8 flex items-center gap-3"
                  onClick={() => {
                    setSelectSort("new");
                    setSort(false);
                  }}
                >
                  3 Month
                </button>
                <button
                  className="nav-link pl-4 pr-8 flex items-center gap-3"
                  onClick={() => {
                    setSelectSort("new");
                    setSort(false);
                  }}
                >
                  6 Month
                </button>
                <button
                  className="nav-link pl-4 pr-8 flex items-center gap-3"
                  onClick={() => {
                    setSelectSort("new");
                    setSort(false);
                  }}
                >
                  12 Month
                </button>
              </DropdownMenu>
            </div>
          </div>

          {/* table */}
          <div className="w-full my-4 overflow-x-auto block">
            <table className="min-w-full">
              <thead className="bg-[var(--admin-bg-gray)] text-[var(--navigation-font-color)]">
                <tr>
                  <th className="whitespace-nowrap p-4 uppercase text-left">
                    #
                  </th>
                  <th className="whitespace-nowrap p-4 uppercase text-left">
                    product
                  </th>
                  <th className="whitespace-nowrap p-4 uppercase text-left">
                    monthly price
                  </th>
                  <th className="whitespace-nowrap p-4 uppercase text-left">
                    buyer
                  </th>
                  <th className="whitespace-nowrap p-4 uppercase text-left">
                    Subscription date
                  </th>
                  <th className="whitespace-nowrap p-4 uppercase text-left">
                    Expiry date
                  </th>
                  <th className="whitespace-nowrap p-4 uppercase text-left">
                    Operation
                  </th>
                </tr>
              </thead>
              <tbody>
                <WebsiteRow
                  num={1}
                  img={"/images/card/canva.jpg"}
                  title={"Spotify Premium"}
                  price={2.57}
                  buyer={987654}
                  subscriptionDate={"11 sep, 2025"}
                  expiryDate={"11 sep, 2025"}
                />
                <WebsiteRow
                  num={2}
                  img={"/images/card/chatgpt.jpg"}
                  title={"ChatGPT"}
                  price={5.54}
                  buyer={987654}
                  subscriptionDate={"11 sep, 2025"}
                  expiryDate={"11 sep, 2025"}
                />
                <WebsiteRow
                  num={3}
                  img={"/images/card/netflix.jpg"}
                  title={"Netflix"}
                  price={10.0}
                  buyer={987654}
                  subscriptionDate={"11 sep, 2025"}
                  expiryDate={"11 sep, 2025"}
                />
              </tbody>
            </table>
          </div>
          {/* load more */}
          <div className="w-full flex justify-center items-center">
            <button className="glass-btn capitalize text-sm md:text-base !px-6 md:!px-10 md:!py-4">
              Load more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
