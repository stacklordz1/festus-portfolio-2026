import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";

import "./globals.css";

import Navbar from "./components/layout/Navbar";
import ThemeProvider from "./components/provider/theme-provider";
import MobileNav from "./components/layout/MobileNav";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Festus — Full-Stack Developer",
    template: "%s | Festus",
  },

  description:
    "Portfolio of Festus, a developer building modern web experiences, applications, and useful digital tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${manrope.variable}
          ${syne.variable}
          min-h-screen
          antialiased
        `}
      >
        <ThemeProvider>
          <Navbar />
          <MobileNav/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}