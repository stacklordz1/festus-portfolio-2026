"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({
  children,
}: ThemeProviderProps) {
  return (
    <NextThemeProvider
      enableSystem
      defaultTheme="system"
      attribute="class"
    >
      {children}
    </NextThemeProvider>
  );
}