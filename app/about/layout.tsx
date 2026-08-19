// (new file, Server Component — no 'use client')
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How I Got Here",
  description:
    "The full story — from a curious moment in an ICT lab to building software that matters.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}