"use client";

import { useState } from "react";
import { ProfileImage } from "@/components/icons/icons";
import AnimationWrapper from "@/common/page-animation";
import MobileMenu from "./MobileMenu";

export default function Profile({ onLanguageClick }) {
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <div className="relative">
      {/* Profile Button */}
      <div
        className="p-2 icon-btn"
        onClick={() => setProfileMenu(!profileMenu)}
      >
        <div className="hidden md:block cursor-pointer">
          <ProfileImage className="w-12 h-12 fill-[var(--navigation-font-color)]" />
        </div>
      </div>

      {/* Dropdown */}
      {profileMenu && (
        <AnimationWrapper>
          <div className="absolute right-0 top-16 z-20 w-72 bordered bg-white rounded-lg shadow-lg">
            <MobileMenu
              onLanguageClick={onLanguageClick}
              onClose={() => setProfileMenu(false)}
            />
          </div>
        </AnimationWrapper>
      )}
    </div>
  );
}
