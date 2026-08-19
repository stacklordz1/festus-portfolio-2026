// app/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { socials } from "../../data/contacts";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Left — name / copyright */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <Link
            href="/"
            className="font-syne text-sm font-semibold text-text-primary"
          >
            Festus.DEV
          </Link>
          <p className="font-[Manrope] text-xs text-text-muted">
            © {year} Chidubem Festus Jnr Offiaukwu. All rights reserved.
          </p>
        </div>

        {/* Right — social icons */}
        <div className="flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => {
            const isExternal = href.startsWith("http");
            return (
              
              <a  key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-text-secondary transition-colors hover:text-text-primary"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;