"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, World } from "@/components/icons/icons";

import Container from "@/components/site/layout/Container";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import LanguageModal from "@/components/ui/site/language/LanguageModal";
import NavButton from "../button/NavButton";

export default function Navbar() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full py-4 fixed top-0 left-0 z-40 bg-[var(--theme-color)]">
      <Container>
        <div className="flex justify-between items-center gap-4 md:gap-10 relative">
          {/* Logo */}
          <div className="w-full max-w-[200px]">
            <Link href={"/"}>
              <h2 className="!text-[var(--navigation-font-color)]">Games</h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <NavLinks pathname={pathname} />
            </div>

            {/* Language Trigger */}
            <div
              className="nav-btn !hidden md:!flex cursor-pointer"
              onClick={() => setIsLangOpen(true)}
            >
              <World className="w-6 h-6 fill-[var(--navigation-font-color)] mr-2" />
              <span>{selectedLang}</span>
            </div>

            {/* Search */}
            <Link href={"/search"}>
              <Search className="w-10 h-10 fill-[var(--navigation-font-color)] icon-btn sm:mx-3" />
            </Link>

            {/* Language Modal */}
            <LanguageModal
              isOpen={isLangOpen}
              onClose={() => setIsLangOpen(false)}
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
            />

            {/* Profile + Login */}
            <div className="hidden md:flex items-center">
              <Profile onLanguageClick={() => setIsLangOpen(true)} />
              <NavButton href={"/auth/login"} buttonName="Log in / Sign up" />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <Menu
                className="w-6 h-6 cursor-pointer ml-3 fill-[var(--navigation-font-color)]"
                onClick={() => setMobileMenuOpen(true)}
              />
            </div>

            {/* Sidebar */}
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              onLanguageClick={() => setIsLangOpen(true)}
            />
          </div>
        </div>
      </Container>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <MobileMenu
            onClose={() => setMobileMenuOpen(false)}
            onLanguageClick={() => setIsLangOpen(true)}
          />
        </div>
      )}
    </nav>
  );
}
