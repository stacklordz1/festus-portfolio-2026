"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { chapters } from "../data/about";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-3xl">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Back link */}
          <motion.div variants={fadeUp} className="mb-10">
            <Link
              href="/"
              className="group flex items-center gap-2 font-[Manrope] text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back home
            </Link>
          </motion.div>

          {/* Label */}
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-border-strong" />
            <span className="font-[Manrope] text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
              How I Got Here
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-syne text-4xl font-medium leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl"
          >
            I didn&apos;t plan to become a{" "}
            <span className="text-text-secondary">software engineer.</span>
          </motion.h1>

          {/* Chapters */}
          <div className="mt-20 space-y-20">
            {chapters.map((chapter) => (
              <motion.div
                key={chapter.number}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
              >
                <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3">
                  <span className="font-syne text-sm text-text-muted">
                    {chapter.number}
                  </span>
                  <span className="h-px flex-1 max-w-8 bg-border-strong" />
                  <span className="font-[Manrope] text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                    {chapter.title}
                  </span>
                </motion.div>

                <div className="space-y-4 font-[Manrope] text-sm leading-8 text-text-secondary md:text-base">
                  {chapter.paragraphs.map((p, i) => (
                    <motion.p key={i} variants={fadeUp}>
                      {p}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 flex flex-col md:flex-row items-center gap-8 "
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 font-[Manrope] text-sm text-text-primary backdrop-blur-sm transition-all duration-300 hover:border-border-strong"
            >
              Let&apos;s talk
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
             className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 font-[Manrope] text-sm text-text-primary backdrop-blur-sm transition-all duration-300 hover:border-border-strong"
                href="https://youtube.com/@festus_dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                 Visit my YouTube channel
                 <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}