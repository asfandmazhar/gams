"use client";

import React, { useState } from "react";
import Container from "./Container";
import {
  CheckCircle,
  Lock,
  Award,
  Shield,
  Telegram,
  FacebookInfer,
  World,
} from "@/components/icons/icons";
import Link from "next/link";
import LanguageModal from "@/components/ui/site/language/LanguageModal";

const FooterData = [
  {
    title: "ABOUT",
    links: [
      { LiName: "About Us", Href: "/about" },
      { LiName: "Contact Us", Href: "/contact" },
      { LiName: "Subscription", Href: "/subscription" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { LiName: "Privacy Policy", Href: "/privacy-policy" },
      { LiName: "Terms & Conditions", Href: "terms-and-conditions" },
      { LiName: "Copyright", Href: "copyright" },
      { LiName: "Refund Policy", Href: "refund-policy" },
    ],
  },
];

export default function Footer() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  return (
    <footer className="bg-gradient-to-br from-black via-black/90 to-black">
      {/* Main Footer Content */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20">
          {/* About Section */}
          {FooterData.map((section, i) => (
            <div key={i}>
              <h3 className="!text-[var(--navigation-font-color)] mb-6">
                {section.title}
              </h3>
              <ul className="space-y-2 md:space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.Href}
                      className="text-sm text-[var(--muted-background-color)]/80 hover:text-[var(--navigation-font-color)] transition-colors duration-200"
                    >
                      {link.LiName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Trust Badges Section */}
          <div>
            <div className="space-y-4">
              {/* Google Safe Browsing */}
              <div className="flex items-center space-x-3 glass-btn !p-3 !rounded-lg">
                <Shield className="fill-green-500 w-8 h-8" />
                <div className="space-y-1">
                  <div className="text-green-500 font-medium text-sm">
                    Google
                  </div>
                  <div className="text-xs text-[var(--muted-background-color)]">
                    Safe Browsing
                  </div>
                </div>
              </div>

              {/* Shopping Guarantee */}
              <div className="flex items-center space-x-3 glass-btn !p-3 !rounded-lg">
                <Award className="fill-yellow-500 w-8 h-8" />
                <div className="space-y-1">
                  <div className="text-yellow-500 font-medium text-sm">
                    Shopping
                  </div>
                  <div className="text-xs text-[var(--muted-background-color)]">
                    Guarantee
                  </div>
                </div>
              </div>

              {/* Trusted Site */}
              <div className="flex items-center space-x-3 glass-btn !p-3 !rounded-lg">
                <CheckCircle className="fill-blue-500 w-8 h-8" />
                <div className="space-y-1">
                  <div className="text-blue-500 font-medium text-sm">
                    Trusted Site
                  </div>
                  <div className="text-xs text-[var(--muted-background-color)]">
                    Verified
                  </div>
                </div>
              </div>

              {/* SSL Certificate */}
              <div className="flex items-center space-x-3 glass-btn !p-3 !rounded-lg">
                <Lock className="fill-green-500 w-8 h-8" />
                <div className="space-y-1">
                  <div className="text-green-500 font-medium text-sm">SSL</div>
                  <div className="text-xs text-[var(--muted-background-color)]">
                    Certificate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="!text-[var(--navigation-font-color)] mb-6">
              FOLLOW US
            </h3>
            <div className="flex space-x-4 mb-8">
              <Link
                href="#"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookInfer className="w-5 h-5 text-[var(--navigation-font-color)]" />
              </Link>
              <Link
                href="#"
                className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors duration-200"
                aria-label="Telegram"
              >
                <Telegram className="w-5 h-5 text-[var(--navigation-font-color)]" />
              </Link>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded glass-btn !p-3 !rounded-lg w-fit text-[var(--muted-background-color)]"
                onClick={() => setIsLangOpen(true)}
              >
                <World className="w-6 h-6 fill-white" />
                <span>{selectedLang}</span>
              </div>
            </div>
            <LanguageModal
              isOpen={isLangOpen}
              onClose={() => setIsLangOpen(false)}
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Logo/Brand */}
              <div className="text-center">
                <h2 className="text-3xl !text-[var(--muted-background-color)]">
                  Games
                </h2>
                <p className="!text-sm !text-[var(--muted-background-color)]/80 mt-1">
                  Powered by GoSplit.com, Inc.
                </p>
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="!text-xs !text-[var(--navigation-font-color)]/80">
                  Copyright © 2024 GG NETWORK LIMITED (ROOM 2202, 22/F, 655
                  NATHAN ROAD, KOWLOON, HONG KONG) All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
