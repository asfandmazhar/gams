"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Loader } from "@/components/ui/Loader";

export default function User() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/user/get/get-all-users");
      if (res?.data?.success) {
        setUsers(res?.data?.users);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Fetching Users Error! Reload and Try Again",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleRoleChange = async (isAdmin, _id) => {
    const toastId = toast.loading("Updating role...");

    try {
      const res = await axios.put("/api/user/update/update-role", {
        isAdmin,
        _id,
      });

      if (res?.data?.success) {
        toast.success(res?.data?.message || "Role updated successfully!", {
          id: toastId,
        });
        getAllUsers(); // refresh list
      } else {
        toast.error(res?.data?.message || "Something went wrong", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong while updating role",
        { id: toastId },
      );
    }
  };

  const DeleteUserHandler = async (_id) => {
    const toastId = toast.loading("Deleting user...");

    try {
      const res = await axios.delete("/api/user/delete/delete-user-by-id", {
        data: { _id },
      });

      if (res?.data?.success) {
        toast.success(res?.data?.message || "User deleted successfully!", {
          id: toastId,
        });
        getAllUsers(); // refresh list
      } else {
        toast.error(res?.data?.message || "Something went wrong", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong while deleting user",
        { id: toastId },
      );
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full mt-4 md:mt-6">
      <div className="w-full my-4 overflow-x-auto block">
        <table className="min-w-full">
          <thead className="bg-[var(--admin-bg-gray)] text-[var(--navigation-font-color)]">
            <tr>
              <th className="whitespace-nowrap p-4 uppercase text-left">#</th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                UserName
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                fullName
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                email
              </th>
              <th className="whitespace-nowrap p-4 uppercase text-left">
                Joining Date
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
            {loading ? (
              <tr className="hover:bg-[var(--admin-bg-gray)]/60 even:bg-[var(--admin-bg-gray)]">
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Loader />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ) : users?.length > 0 ? (
              users?.map((user, i) => (
                <tr
                  className="hover:bg-[var(--admin-bg-gray)]/60 even:bg-[var(--admin-bg-gray)]"
                  key={user?._id}
                >
                  <td className="p-4">{i + 1}</td>
                  <td className="p-4">
                    <span className="lowercase">@{user?.username}</span>
                  </td>
                  <td className="p-4">
                    <span className="capitalize">{user?.fullName}</span>
                  </td>
                  <td className="p-4">
                    <span className="lowercase">{user?.email}</span>
                  </td>
                  <td className="p-4 lowercase">{user?.username}</td>
                  <td className="p-4">
                    <select
                      className="bg-[var(--admin-bg-gray)] px-4 py-2 rounded-lg uppercase cursor-pointer"
                      onChange={(e) =>
                        handleRoleChange(e?.target?.value, user?._id)
                      }
                    >
                      <option value={user?.isAdmin ? true : false}>
                        {user?.isAdmin ? "admin" : "user"}
                      </option>
                      <option value={!user?.isAdmin ? true : false}>
                        {!user?.isAdmin ? "admin" : "user"}
                      </option>
                    </select>
                  </td>
                  <td className="p-4 whitespace-nowrap space-x-2">
                    <button
                      className="danger-link"
                      onClick={() => DeleteUserHandler(user?._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>User Not Found!</td>
              </tr>
            )}
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
  );
}
