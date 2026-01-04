"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarLink({ link, icon: Icon, text, setIsOpen }) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      className={`sidebar-link flex items-center ${
        isActive
          ? "inline-block gradient-text"
          : "text-[var(--navigation-font-color)]/70 hover:!text-[var(--navigation-color)]"
      }`}
      onClick={() => setIsOpen(false)}
    >
      {Icon && <Icon className="w-4 h-4" gradient={isActive} />}
      <span className={`capitalize !font-bold`}>{text}</span>
    </Link>
  );
}
