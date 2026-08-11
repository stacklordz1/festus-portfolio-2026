"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-3">
      {/* Current theme icon */}
      <div className="text-text-secondary" aria-hidden="true">
        {isDark ? <Moon size={17} /> : <Sun size={17} />}
      </div>

      {/* Theme switch */}
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        onClick={toggleTheme}
        className="
          relative
          h-6 w-11
          rounded-full
          border border-white/10
          bg-white/[0.06]
          transition-colors
          duration-300
          hover:bg-white/[0.10]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white/30
        "
      >
        <span
          className={`
            absolute
            top-1
            left-1
            h-4 w-4
            rounded-full
            bg-white
            shadow-sm
            transition-transform
            duration-300
            ease-out
            ${isDark ? "translate-x-5" : "translate-x-0"}
          `}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;