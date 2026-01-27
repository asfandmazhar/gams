"use client";

import { useState } from "react";
import { usePathname, notFound } from "next/navigation";
import "../../globals.css";
import localFont from "next/font/local";
import AdminNavbar from "@/components/admin/layout/AdminNavbar";
import AdminSidebar from "@/components/admin/layout/AdminSidebar";
import { useAuth } from "@/context/AuthContext";
import { Loader } from "@/components/ui/Loader";

// Admin Fonts
const roboto = localFont({
  src: [
    {
      path: "../../../fonts/roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../fonts/roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../fonts/roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

export default function AdminLayout({ children }) {
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const hideLayoutOn = ["/admin/addProductData"];
  const shouldHideLayout = hideLayoutOn.includes(pathname);

  // ⏳ Wait for auth
  if (loading) {
    return <Loader />;
  }

  // ❌ Not admin → pretend route doesn't exist
  if (!user || !user.isAdmin) {
    notFound();
  }

  // ✅ Admin allowed, but hide layout on specific routes
  if (shouldHideLayout) {
    return <div className={roboto.variable}>{children}</div>;
  }

  return (
    <div className={`${roboto.variable} admin-layout min-h-screen flex`}>
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 overflow-x-auto">
        <AdminNavbar setIsOpen={setIsOpen} />
        {children}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
