import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn() merges conditional classNames with Tailwind intelligently
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
