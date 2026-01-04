import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/"
        className={`Uppercase-text nav-btn !hidden 2xl:!flex ${
          pathname === "/" ? "bg-[var(--hover-theme-color)] text-white" : ""
        }`}
      >
        Home page
      </Link>
      <Link
        href="/contact"
        className={`Uppercase-text nav-btn !hidden xl:!flex ${
          pathname === "/support"
            ? "bg-[var(--hover-theme-color)] text-white"
            : ""
        }`}
      >
        Contact support
      </Link>
      <Link
        href="/subscription"
        className={`Uppercase-text nav-btn ${
          pathname === "/subscription"
            ? "bg-[var(--hover-theme-color)] text-white"
            : ""
        }`}
      >
        Subscription
      </Link>
    </div>
  );
}
