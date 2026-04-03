import { useState, useEffect } from "react";

type Theme = "dark" | "light";

/**
 * 讀取初始 theme 的優先順序：
 * 1. localStorage 已存在的偏好設定
 * 2. 系統層級的 prefers-color-scheme
 * 3. 預設為 light
 */
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored === "dark" || stored === "light") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * 管理 dark / light 主題切換。
 *
 * - 純邏輯 Hook：僅操作 `document.documentElement.classList`，
 *   配合 index.css 的 `@custom-variant dark (&:is(.dark *))` 驅動 Tailwind v4 樣式切換。
 * - 選擇的主題持久化儲存於 localStorage（key: "theme"）。
 * - 監聽系統 `prefers-color-scheme` 變化，若 localStorage 尚無設定則跟隨系統。
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // 同步 class 與 localStorage
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // 監聽系統主題變化，僅在使用者尚未手動設定時跟隨
  useEffect(() => {
    if (localStorage.getItem("theme")) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const setDark = () => setTheme("dark");
  const setLight = () => setTheme("light");

  return {
    theme,
    isDark: theme === "dark",
    isLight: theme === "light",
    toggleTheme,
    setDark,
    setLight,
  };
}
