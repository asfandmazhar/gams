"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Reload } from "@/components/icons/icons";

/* 🔹 Skeleton row (Category-style loading) */
function TableSkeletonRow({ columns = 7 }) {
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

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  /* 🔹 Fetch users */
  const getAllUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/user/get/get-all-users");

      if (res?.data?.success) {
        setUsers(res.data.users);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Fetching users failed. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  /* 🔹 Update role */
  const handleRoleChange = async (isAdmin, _id) => {
    const toastId = toast.loading("Updating role...");

    try {
      const res = await axios.put("/api/user/update/update-role", {
        isAdmin,
        _id,
      });

      if (res?.data?.success) {
        toast.success("Role updated", { id: toastId });
        getAllUsers();
      } else {
        toast.error("Update failed", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  /* 🔹 Delete user */
  const DeleteUserHandler = async (_id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    const toastId = toast.loading("Deleting user...");

    try {
      const res = await axios.delete("/api/user/delete/delete-user-by-id", {
        data: { _id },
      });

      if (res?.data?.success) {
        toast.success("User deleted", { id: toastId });
        getAllUsers();
      } else {
        toast.error("Delete failed", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full mt-4 md:mt-6 relative">
      <div className="w-full my-4 overflow-x-auto block">
        <table className="min-w-full">
          <thead className="bg-[var(--admin-bg-gray)] text-[var(--navigation-font-color)]">
            <tr>
              <th className="p-4 uppercase text-left">#</th>
              <th className="p-4 uppercase text-left">Username</th>
              <th className="p-4 uppercase text-left">Full Name</th>
              <th className="p-4 uppercase text-left">Email</th>
              <th className="p-4 uppercase text-left">Joining Date</th>
              <th className="p-4 uppercase text-left">Role</th>
              <th className="p-4 uppercase text-left">Operation</th>
            </tr>
          </thead>

          <tbody>
            {/* 🔥 Loading skeleton */}
            {loading ? (
              <>
                <TableSkeletonRow />
                <TableSkeletonRow />
                <TableSkeletonRow />
              </>
            ) : users.length > 0 ? (
              users.map((user, i) => (
                <tr
                  key={user._id}
                  className="hover:bg-[var(--admin-bg-gray)]/60 even:bg-[var(--admin-bg-gray)]"
                >
                  <td className="p-4">{i + 1}</td>

                  <td className="p-4 lowercase">@{user.username}</td>

                  <td className="p-4 capitalize">{user.fullName}</td>

                  <td className="p-4 lowercase">{user.email}</td>

                  <td className="p-4 whitespace-nowrap">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <select
                      className="bg-[var(--admin-bg-gray)] px-4 py-2 rounded-lg uppercase cursor-pointer"
                      value={user.isAdmin}
                      onChange={(e) =>
                        handleRoleChange(e.target.value === "true", user._id)
                      }
                    >
                      <option value="true">ADMIN</option>
                      <option value="false">USER</option>
                    </select>
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <button
                      className="danger-link"
                      onClick={() => DeleteUserHandler(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-6 text-center opacity-60">
                  User not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Load more (future pagination) */}
      <div className="w-full hidden justify-center">
        <button
          disabled={loading}
          className="glass-btn capitalize text-sm md:text-base !px-6 md:!px-10 md:!py-4"
        >
          Load more
        </button>
      </div>

      {/* Reload Button */}
      <button
        onClick={getAllUsers}
        className="glass-btn flex justify-center items-center w-fit !p-4 !fixed !right-5 !bottom-5"
      >
        <Reload className={"w-8 h-8 invert"} />
      </button>
    </div>
  );
}
