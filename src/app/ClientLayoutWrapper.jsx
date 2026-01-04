"use client";

import Navbar from "@/components/site/layout/Header";
import Footer from "@/components/site/layout/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayout = ["/search", "/auth/login", "/admin"].includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
