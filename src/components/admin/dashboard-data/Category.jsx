"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Reload } from "@/components/icons/icons";

function TableSkeletonRow({ columns = 5 }) {
  return (
    <tr className="">
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="p-4">
          <div className="h-4 w-full rounded-md bg-[var(--admin-bg-gray)]/70 animate-pulse" />
        </td>
      ))}
    </tr>
  );
}

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  const fileInputRef = useRef(null);
  const selectedCategoryId = useRef(null);

  const getCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/category/get");
      if (res.data.success) setCategories(res.data.categories);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  /* 🔹 Update category name */
  const updateCategoryName = async (id, name) => {
    if (!name || name.trim().length < 3) {
      return toast.error("Category name must be at least 3 characters");
    }

    setUpdatingId(id);
    const toastId = toast.loading("Updating category name...");

    try {
      const res = await axios.put("/api/category/update/update-name", {
        _id: id,
        name,
      });

      if (res.data.success) {
        toast.success("Category updated", { id: toastId });
        getCategories();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed", {
        id: toastId,
      });
    } finally {
      setUpdatingId(null);
    }
  };

  /* 🔹 Upload category icon */
  const handleIconClick = (id) => {
    selectedCategoryId.current = id;
    fileInputRef.current.click();
  };

  const handleIconUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      return toast.error("Only image files are allowed");
    }

    const formData = new FormData();
    formData.append("icon", file);
    formData.append("id", selectedCategoryId.current);

    setUpdatingId(selectedCategoryId.current);
    const toastId = toast.loading("Updating icon...");

    try {
      const res = await axios.put("/api/category/update/update-icon", formData);
      if (res.data.success) {
        toast.success("Icon updated", { id: toastId });
        getCategories();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Icon update failed", {
        id: toastId,
      });
    } finally {
      setUpdatingId(null);
      e.target.value = "";
    }
  };

  /* 🔹 Delete category */
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this category?")) return;

    const toastId = toast.loading("Deleting category...");
    try {
      const res = await axios.delete(`/api/category/delete/${id}`);
      if (res.data.success) {
        toast.success("Category deleted", { id: toastId });
        getCategories();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed", {
        id: toastId,
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full mt-4 md:mt-6 relative min-h-screen">
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*,.svg"
        hidden
        onChange={handleIconUpload}
      />

      <div className="w-full my-4 overflow-x-auto block">
        <table className="min-w-full">
          <thead className="bg-[var(--admin-bg-gray)]">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Icon</th>
              <th className="p-4">Category</th>
              <th className="p-4">Date</th>
              <th className="p-4">Operation</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <>
                <TableSkeletonRow />
                <TableSkeletonRow />
                <TableSkeletonRow />
              </>
            ) : categories.length ? (
              categories.map((cat, index) => (
                <tr
                  key={cat._id}
                  className="hover:bg-[var(--admin-bg-gray)]/60 even:bg-[var(--admin-bg-gray)]"
                >
                  <td className="p-4">{index + 1}</td>

                  <td className="p-6">
                    <img
                      src={cat.icon}
                      alt={cat.name}
                      onClick={() => handleIconClick(cat._id)}
                      className={`w-8 h-8 object-contain cursor-pointer ${
                        updatingId === cat._id ? "opacity-50" : ""
                      }`}
                      title="Click to change icon"
                    />
                  </td>

                  <td className="p-4">
                    <input
                      defaultValue={cat.name}
                      className="input-box w-full bg-transparent"
                      disabled={updatingId === cat._id}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          updateCategoryName(cat._id, e.target.value);
                          e.target.blur();
                        }
                      }}
                    />
                  </td>

                  <td className="p-4 uppercase whitespace-nowrap">
                    {new Date(cat.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <button
                      className="danger-link"
                      onClick={() => handleDelete(cat._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-6 text-center opacity-60">
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Reload */}
      <button
        onClick={getCategories}
        className="glass-btn flex justify-center items-center w-fit !p-4 !fixed !right-5 !bottom-5"
      >
        <Reload className="w-8 h-8 invert" />
      </button>
    </div>
  );
}
