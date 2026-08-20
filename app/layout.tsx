import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";

import "./globals.css";

import Navbar from "./components/layout/Navbar";
import ThemeProvider from "./components/provider/theme-provider";
import MobileNav from "./components/layout/MobileNav";
import Footer from "./components/sections/footer";
import JsonLd from "./components/seo/JsonLd";

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

const BASE_URL = 'https://festus-jnr-portfolio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Festus Jnr — Full-Stack Developer",
    template: "%s | Festus",
  },

  description:
    "Portfolio of Festus, a developer building modern web experiences, applications, and useful digital tools.",

  keywords: [
  "Festus",
  "Festus Jnr",
  "Festus Dev",
  "Chidubem Festus Jnr Offiaukwu",
  "Festus developer",
  "Festus web developer",
  "Festus software developer",
  "Festus full stack developer",
  "Festus developer portfolio",
  "developer portfolio",
  "software engineer portfolio",
  "software developer portfolio",
  "web developer portfolio",
  "full stack developer",
  "full stack web developer",
  "frontend developer",
  "backend developer",
  "junior web developer",
  "aspiring software engineer",
  "web developer",
  "software developer",
  "software engineer",
  "web development",
  "full stack web development",
  "JavaScript developer",
  "TypeScript developer",
  "React developer",
  "Next.js developer",
  "Node.js developer",
  "Python developer",
  "React Native developer",
  "Tailwind CSS developer",
  "MERN stack developer",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "SQL",
  "Tailwind CSS",
  "React Native",
  "GitHub developer",
  "web development projects",
  "full stack projects",
  "React projects",
  "Next.js projects",
  "JavaScript projects",
  "TypeScript projects",
  "coding projects",
  "web applications",
  "full stack web applications",
  "modern web applications",
  "responsive websites",
  "developer Ireland",
  "web developer Ireland",
  "software developer Ireland",
  "full stack developer Ireland",
  "frontend developer Ireland",
  "junior developer Ireland",
  "web developer Dublin",
  "software developer Dublin",
  "web developer Limerick",
  "software developer Limerick",
  "Pantheon",
],
  authors: [{ name: "Chidubem Festus Jnr Offiaukwu" }],
  creator: "Festus Jnr",
  publisher: "Festus Jnr",

  openGraph: {
    title: "Festus Jnr — Full-Stack Developer",
    description:
      "Portfolio of Festus, a developer building modern web experiences, applications, and useful digital tools.",
    url: BASE_URL,
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
    creator: '@festus_jnr08',
    title: "Festus Jnr — Full-Stack Developer",
    description: "Festus Jnr is a full-stack web developer building modern web applications with JavaScript, TypeScript, React, Next.js, Node.js, and more.",
    images: ["/og-image.png"],
  },
  robots:{
    index: true,
    follow: true,
    nocache: false,
    googleBot:{
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    }
  },
  alternates:{
    canonical: BASE_URL
  },

  icons: {
    icon: "/favicon.ico",
  },

  applicationName: 'Festus.Dev',
  category: 'Technology',
  classification: "Technology, ",
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
        <JsonLd/>
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