"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/admin/layout/Container";
import AnimationWrapper from "@/common/PageAnimation";
import Card from "@/components/ui/admin/card/Card";
import CardSkeleton from "@/components/ui/admin/card/CardSkeleton";
import { toast } from "react-hot-toast";
import axios from "axios";
import {
  Payment,
  Users,
  Orders,
  Browser,
  Plus,
  Reload,
} from "@/components/icons/icons";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalAdmin, setTotalAdmin] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  const getTotalUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/user/get/total-users");

      if (res?.data?.success) {
        setTotalUsers(res.data.totalUsers);
        setTotalAdmin(res.data.totalAdmin);
        setTotalUser(res.data.totalUser);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Fetching users failed. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const ReloadDashboard = () => {
    getTotalUsers();
  };

  useEffect(() => {
    ReloadDashboard();
  }, []);

  return (
    <AnimationWrapper>
      <section className="relative">
        <Container className="space-y-6">
          <h4 className="!text-[var(--navigation-font-color)] mt-8">
            Overview
          </h4>

          {/* Cards */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-6">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)
            ) : (
              <>
                <Card
                  heading="Payment"
                  total={123123}
                  link="/admin/payment"
                  icon={Payment}
                />

                <Card
                  heading="Users"
                  total={totalUsers}
                  totalAdmin={totalAdmin}
                  totalUser={totalUser}
                  link="/admin/user"
                  icon={Users}
                />

                <Card
                  heading="Orders"
                  total={4231232}
                  link="/admin/orders"
                  icon={Orders}
                />

                <Card
                  heading="Product"
                  total={4231232}
                  link="/admin/product"
                  icon={Browser}
                />
              </>
            )}
          </div>

          <h4 className="!text-[var(--navigation-font-color)]">Add New</h4>

          <div className="flex w-full justify-between items-center gap-4 lg:flex-row flex-col">
            <Link href="/admin/addProductData" className="gradient-bg group">
              <Plus className="w-10 md:w-12 h-10 md:h-12 my-4 md:my-6 group-hover:scale-110 group-hover:hidden fill-[var(--navigation-font-color)]" />
              <span className="hidden group-hover:block text-2xl font-bold uppercase my-4 md:my-8">
                Add Products
              </span>
            </Link>
          </div>
        </Container>
        {/* Reload Button */}
        <button
          onClick={ReloadDashboard}
          className="glass-btn flex justify-center items-center w-fit !p-4 !fixed !right-5 !bottom-5"
        >
          <Reload className={"w-8 h-8 invert"} />
        </button>
      </section>
    </AnimationWrapper>
  );
}
