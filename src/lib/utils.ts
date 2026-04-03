import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 動態合併 Tailwind CSS class 的工具函式。
 * 結合 clsx（條件式 class）與 tailwind-merge（解決 Tailwind 類別衝突）。
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-accent text-white", "hover:opacity-90")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
