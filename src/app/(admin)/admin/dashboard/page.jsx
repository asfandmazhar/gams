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
  const [countUsers, setCountUsers] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const getTotalUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/user/get/count-users");

      if (res?.data?.success) {
        setCountUsers(res?.data?.countUser);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Counting users failed. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const getTotalProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/product/get/count-product");

      if (res?.data?.success) {
        setCountProducts(res?.data?.countProducts);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Counting Products failed. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const ReloadDashboard = () => {
    getTotalUsers();
    getTotalProducts();
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
                  total={countUsers?.totalUsers}
                  detail={`${countUsers?.totalAdmin > 0 ? `${countUsers?.totalAdmin.toLocaleString()} Admin` : ""} ${countUsers?.totalUser > 0 ? `${countUsers?.totalUser.toLocaleString()} Users` : ""}`}
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
                  total={countProducts?.totalProducts}
                  detail={`${countProducts?.totalActiveProducts > 0 ? `${countProducts?.totalActiveProducts.toLocaleString()} Active` : ""} ${countProducts?.totalDeactivateProducts > 0 ? `${countProducts?.totalDeactivateProducts.toLocaleString()} Deactivate` : ""} ${countProducts?.totalPublishProducts > 0 ? `${countProducts?.totalPublishProducts.toLocaleString()} Published` : ""} ${countProducts?.totalDraftProducts > 0 ? `${countProducts?.totalDraftProducts.toLocaleString()} Draft` : ""}`}
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
