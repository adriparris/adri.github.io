import { useEffect, useState } from "react";

export function useGlobalTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Check local storage for user preference
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") as "light" | "dark" || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Store user preference
  }, [theme]);

  return { theme, setTheme };
}
