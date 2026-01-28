"use client";

import React, { useState } from "react";
import AnimationWrapper from "@/common/PageAnimation";
import Container from "@/components/admin/layout/Container";
import CategoryRow from "@/components/admin/dashboard-data/Category";
import axios from "axios";
import toast from "react-hot-toast";

export default function Page() {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !icon) {
      toast.error("Category name and icon are required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("icon", icon);

    try {
      setLoading(true);

      const res = await axios.post("/api/category/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast.success("Category added successfully");
        setName("");
        setIcon(null);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimationWrapper>
      <Container>
        <section className="mt-8">
          <h4 className="!text-[var(--navigation-font-color)] my-8">
            Add Category
          </h4>

          <div className="flex gap-6 w-full">
            <form
              onSubmit={handleSubmit}
              className="flex lg:flex-row flex-col items-center w-full gap-3"
            >
              <div className="w-96">
                <input
                  type="file"
                  accept="image/*"
                  className="input-box bg-[var(--admin-bg-gray)] !rounded-xl cursor-pointer"
                  onChange={(e) => setIcon(e.target.files[0])}
                />
              </div>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-box bg-[var(--admin-bg-gray)] !rounded-xl"
                placeholder="Enter Category Name"
              />

              <button
                disabled={loading}
                className="glass-btn capitalize text-sm md:text-base xl:!pr-14 md:!py-4"
              >
                {loading ? "Adding..." : "Add Category"}
              </button>
            </form>
          </div>

          <hr className="border-b my-6" />
          <CategoryRow />
        </section>
      </Container>
    </AnimationWrapper>
  );
}
