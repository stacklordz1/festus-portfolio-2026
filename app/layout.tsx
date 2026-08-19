import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";

import "./globals.css";

import Navbar from "./components/layout/Navbar";
import ThemeProvider from "./components/provider/theme-provider";
import MobileNav from "./components/layout/MobileNav";
import Footer from "./components/sections/footer";

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
  metadataBase: new URL('https://festus-jnr-portfolio.vercel.app/'),

  title: {
    default: "Festus Jnr — Full-Stack Developer",
    template: "%s | Festus",
  },

  description:
    "Portfolio of Festus, a developer building modern web experiences, applications, and useful digital tools.",

  keywords: [
    "Festus Jnr",
    "Chidubem Festus Jnr Offiaukwu",
    "software engineer portfolio",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "Pantheon",
  ],
  authors: [{ name: "Chidubem Festus Jnr Offiaukwu" }],
  creator: "Festus Jnr",

  openGraph: {
    title: "Festus Jnr — Full-Stack Developer",
    description:
      "Portfolio of Festus, a developer building modern web experiences, applications, and useful digital tools.",
    url: "https://festus-jnr-portfolio.vercel.app/",
    siteName: "Festus.DEV",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Festus Jnr — Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Festus Jnr — Full-Stack Developer",
    description:
      "Portfolio of Festus, a developer building modern web experiences, applications, and useful digital tools.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
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
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}