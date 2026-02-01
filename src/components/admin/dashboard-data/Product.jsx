"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DropdownMenu from "@/components/ui/admin/Dropdown";
import { Plus, Cross, Filter, Arrow } from "@/components/icons/icons";
import Button from "@/components/ui/admin/button/Button";
import axios from "axios";
import { toast } from "react-hot-toast";

const CategorySkeleton = () => (
  <li className="h-6 rounded-full bg-white/10 animate-pulse" />
);

const TableRowSkeleton = () => (
  <tr className="animate-pulse">
    <td className="p-4">
      <div className="h-4 w-6 bg-white/10 rounded" />
    </td>
    <td className="p-4">
      <div className="h-4 w-40 bg-white/10 rounded" />
    </td>
    <td className="p-4">
      <div className="h-4 w-20 bg-white/10 rounded" />
    </td>
    <td className="p-4">
      <div className="h-4 w-16 bg-white/10 rounded" />
    </td>
    <td className="p-4">
      <div className="h-4 w-28 bg-white/10 rounded" />
    </td>
    <td className="p-4">
      <div className="h-4 w-28 bg-white/10 rounded" />
    </td>
  </tr>
);

export default function Product() {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [selectSort, setSelectSort] = useState("papular");
  const menuRef = useRef();
  const [Categories, setCategories] = useState();
  const [Products, setProducts] = useState();
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const getCategories = async () => {
    setLoadingCategory(true);
    try {
      const res = await axios.get("/api/category/get");
      if (res.data.success) setCategories(res.data.categories);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load categories");
    } finally {
      setLoadingCategory(false);
    }
  };

  const getProducts = async () => {
    setLoadingProducts(true);
    try {
      const res = await axios.get("/api/product/get/get-all-product");
      console.log(res?.data?.products);

      if (res?.data?.success) setProducts(res?.data?.products);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load Products");
    } finally {
      setLoadingProducts(false);
    }
  };

  /* 🔹 Delete Product */
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this Product?")) return;

    const toastId = toast.loading("Deleting Product...");
    try {
      const res = await axios.delete(`/api/product/delete/${id}`);
      if (res.data.success) {
        toast.success("Product deleted", { id: toastId });
        getProducts();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed", {
        id: toastId,
      });
    }
  };

  /* 🔹 Update Status */
  const updateStatus = async (_id, status) => {
    const toastId = toast.loading("Updating Product Status...");
    if (!_id || !status) {
      return toast.error("Some data is missing!", { id: toastId });
    }

    try {
      const res = await axios.put(`/api/product/update/update-status`, {
        _id,
        status,
      });
      if (res.data.success) {
        toast.success("Product Status Updated", { id: toastId });
        getProducts();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Updating failed", {
        id: toastId,
      });
    }
  };

  /* 🔹 Update isActive */
  const updateIsActive = async (_id, isActive) => {
    const toastId = toast.loading("Updating Product...");
    if (!_id) {
      return toast.error("Some data is missing!", { id: toastId });
    }

    try {
      const res = await axios.put(`/api/product/update/update-isactive`, {
        _id,
        isActive,
      });
      if (res.data.success) {
        toast.success(
          `Product ${isActive ? "Activated" : "Deactivated"} Successfully!`,
          { id: toastId },
        );
        getProducts();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Updating failed", {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

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
              {loadingCategory ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <CategorySkeleton key={i} />
                ))
              ) : Categories?.length === 0 ? (
                <li className="text-white/50 glass-effect p-2 text-center">
                  Category Not Found!
                </li>
              ) : (
                Categories?.map((cat) => (
                  <li key={cat._id}>
                    <Link
                      href="/"
                      className="link text-light/80 hover:text-light"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))
              )}
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
                    Status
                  </th>
                  <th className="whitespace-nowrap p-4 uppercase text-left">
                    Is Active
                  </th>
                  <th className="whitespace-nowrap p-4 uppercase text-left">
                    Created At
                  </th>
                  <th className="whitespace-nowrap p-4 uppercase text-left">
                    Operation
                  </th>
                </tr>
              </thead>
              <tbody>
                {loadingProducts ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <TableRowSkeleton key={i} />
                  ))
                ) : Products?.length <= 0 ? (
                  <tr className="p-6 text-center opacity-60">
                    <td colSpan="7" className="p-4">
                      Product not found!
                    </td>
                  </tr>
                ) : (
                  Products?.map((product, i) => (
                    <tr
                      className="hover:bg-[var(--admin-bg-gray)]/60 even:bg-[var(--admin-bg-gray)]"
                      key={product?._id}
                    >
                      <td className="p-4">{i + 1}</td>
                      <td className="p-4">
                        <Link
                          href={"/"}
                          className="flex gap-4 items-center min-w-[250px] md:min-w-[300px] lg:min-w-[400px]"
                        >
                          <div className="w-14 h-14 md:w-20 md:h-20">
                            <img
                              width={20}
                              height={20}
                              src={
                                product?.basic_info?.thumbnail?.url != null
                                  ? product?.basic_info?.thumbnail?.url
                                  : "https://placehold.co/60x60?text=Draft"
                              }
                              alt={product?.basic_info?.thumbnail?.alt || ""}
                              className="object-contain w-full"
                            />
                          </div>
                          <h5 className="capitalize hover:underline truncate max-w-[200px] md:max-w-[250px]">
                            {product?.basic_info?.name}
                          </h5>
                        </Link>
                      </td>
                      <td className="p-4">
                        <select
                          className="input-box glass-effect !w-32 !p-3 capitalize !rounded-md"
                          onChange={(e) =>
                            updateStatus(product._id, e.target.value)
                          }
                        >
                          <option
                            value={
                              product?.status == "draft" ? "draft" : "published"
                            }
                            className="text-white bg-black/80"
                          >
                            {product?.status == "draft" ? "draft" : "published"}
                          </option>
                          <option
                            value={
                              product?.status != "draft" ? "draft" : "published"
                            }
                            className="text-white bg-black/80"
                          >
                            {product?.status != "draft" ? "draft" : "published"}
                          </option>
                        </select>
                      </td>
                      <td className="p-4 uppercase whitespace-nowrap">
                        <button
                          className="cursor-pointer"
                          onClick={() =>
                            updateIsActive(product?._id, !product?.isActive)
                          }
                        >
                          <div
                            className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300
        ${product?.isActive ? "bg-green-500" : "bg-gray-300"}`}
                          >
                            <span
                              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300
          ${product?.isActive ? "translate-x-7" : "translate-x-1"}`}
                            />
                          </div>
                        </button>
                      </td>
                      <td className="p-4 uppercase whitespace-nowrap">
                        {new Date(product.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 whitespace-nowrap space-x-2">
                        <button className="link">Edit</button>
                        <button
                          className="danger-link"
                          onClick={() => handleDelete(product._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {/* load more */}
          <div className="w-full  justify-center items-center hidden">
            <button className="glass-btn capitalize text-sm md:text-base !px-6 md:!px-10 md:!py-4">
              Load more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
