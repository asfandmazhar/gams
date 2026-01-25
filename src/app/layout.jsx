"use client";

import { usePathname } from "next/navigation";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";

const bricolage = localFont({
  src: [
    {
      path: "../fonts/bricolage/BricolageGrotesque-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/bricolage/BricolageGrotesque-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/bricolage/BricolageGrotesque-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bricolage",
});

const poppins = localFont({
  src: [
    {
      path: "../fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  const pathname = usePathname?.();

  const isAdminPage = pathname?.startsWith("/admin");
  const isLoadingPage = pathname?.includes("/loading");

  return (
    <html lang="en" data-arp="">
      <body
        suppressHydrationWarning={true}
        className={`${bricolage.variable} ${poppins.variable} ${
          isAdminPage ? "admin-layout" : "website-layout"
        }`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <AuthProvider>
          {isAdminPage || isLoadingPage ? (
            children
          ) : (
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
