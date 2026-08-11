"use client";

import { navigation } from "@/app/lib/navigation";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [activeHref, setActiveHref] = useState("#about");

  return (
    <nav
      className="
        glass
        fixed top-6 left-1/2 z-50
        hidden md:flex
        -translate-x-1/2
        items-center
        gap-3
        rounded-2xl
        px-3 py-3
        shadow-lg
        whitespace-nowrap
      "
    >
      {/* Logo / Avatar */}
      <Link
        href="/"
        aria-label="Go to homepage"
        className="
          flex h-9 w-9 shrink-0
          items-center justify-center
          overflow-hidden
          rounded-full
          border border-white/10
          transition-transform duration-300
          hover:scale-105
        "
      >
        <Image
          src="/avatar.jpg"
          width={36}
          height={36}
          alt="Festus"
          className="h-full w-full object-cover"
          priority
        />
      </Link>

      {/* Divider */}
      <span
        aria-hidden="true"
        className="h-5 w-px bg-white/10"
      />

      {/* Navigation */}
      <div className="flex items-center gap-0.5">
        {navigation.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveHref(item.href)}
              className={`
                rounded-xl
                px-3 py-2
                text-sm
                transition-all duration-200
                ${
                  isActive
                    ? "bg-white/[0.07] text-text-primary"
                    : "text-text-secondary hover:bg-white/[0.04] hover:text-text-primary"
                }
              `}
            >
              {item.title}
            </a>
          );
        })}
      </div>

      {/* Divider */}
      <span
        aria-hidden="true"
        className="h-5 w-px bg-white/10"
      />

      {/* Resume */}
      <a
        href="/resume.pdf"
        download
        className="
          group
          flex items-center gap-1.5
          rounded-xl
          px-3 py-2
          text-sm
          text-text-primary
          transition-colors
          hover:bg-white/[0.07]
        "
      >
        <span>Resume</span>

        <ArrowUpRight
          size={15}
          strokeWidth={1.8}
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </a>

      {/* Divider */}
      <span
        aria-hidden="true"
        className="h-5 w-px bg-white/10"
      />

      {/* Theme Toggle */}
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;