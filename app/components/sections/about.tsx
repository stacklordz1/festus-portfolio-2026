"use client";

import { ArrowRight, ArrowUpRight, Code2, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { projects } from "../../data/project";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion, Variants } from "framer-motion";


const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};


export default function About() {
    const featureProjects = projects.slice(0, 2)
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-24">

        {/* ================= LEFT — STORY ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Section label */}
          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-border-strong" />

            <span className="font-[Manrope] text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
              01 — About
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            id="about-heading"
            className="max-w-2xl font-syne text-4xl font-medium leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl"
          >
            I didn&apos;t plan to become a{" "}
            <span className="text-text-secondary">
              software engineer.
            </span>
          </motion.h2>

          {/* Read story button */}
          <motion.div
            variants={fadeUp}
            className="mt-6"
          >
            <Button
              variant="outline"
              className="group rounded-full"
            >
              <Link href="/about" className="flex items-center gap-2 ">
                Read full story
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Button>
          </motion.div>

          {/* Story */}
          <motion.div
            variants={container}
            className="mt-8 max-w-xl space-y-5 font-[Manrope] text-sm leading-7 text-text-secondary md:text-base"
          >
            <motion.p variants={fadeUp}>
              I&apos;ve always been interested in computers, but programming
              wasn&apos;t something I initially planned to pursue. That changed
              when I saw a friend learning HTML in my school&apos;s ICT lab.
            </motion.p>

            <motion.p variants={fadeUp}>
              Curiosity turned into something much bigger. I started with
              HTML, CSS and JavaScript, then moved into React, Node.js, React
              Native, the MERN stack, Python and SQL — learning mostly by
              building things myself.
            </motion.p>

            <motion.p variants={fadeUp}>
              What keeps me obsessed with software is the ability to take an
              idea, turn it into something real, and create solutions that
              people can actually use.
            </motion.p>

            <motion.p variants={fadeUp}>
              Today, I&apos;m part of the founding team at{" "}
              <span className="font-semibold text-text-primary">
                Pantheon
              </span>
              , a venture studio we&apos;re building from the ground up.
              I&apos;m also exploring Python, automation and AI as I continue
              growing as a developer.
            </motion.p>
          </motion.div>

          {/* Small info cards */}
          <motion.div
            variants={container}
            className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2"
          >

            {/* Currently */}
            <motion.div
              variants={fadeUp}
              className="group rounded-2xl border border-border bg-background/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
            >
              <Code2
                size={20}
                className="mb-5 text-text-primary transition-transform duration-300 group-hover:scale-110"
              />

              <p className="font-[Manrope] text-xs uppercase tracking-wider text-text-secondary">
                Currently
              </p>

              <p className="mt-1 font-[Manrope] text-sm font-medium text-text-primary">
                Building & Learning
              </p>
            </motion.div>

            {/* Focus */}
            <motion.div
              variants={fadeUp}
              className="group rounded-2xl border border-border bg-background/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
            >
              <Sparkles
                size={20}
                className="mb-5 text-text-primary transition-transform duration-300 group-hover:scale-110"
              />

              <p className="font-[Manrope] text-xs uppercase tracking-wider text-text-secondary">
                Focus
              </p>

              <p className="mt-1 font-[Manrope] text-sm font-medium text-text-primary">
                Software · AI · Startups
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT — PROJECTS ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative w-full max-w-xl lg:pt-10"
        >

          {/* Project cards */}
          <div className="space-y-6">
            {featureProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeRight}
                className={
                  index === 0
                    ? "md:translate-x-5"
                    : "md:-translate-x-5 md:mt-10"
                }
              >
                <Card
                  className="group overflow-hidden rounded-[1.5rem] border-border bg-background/40
                    p-1.5 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2
                    hover:border-border-strong hover:shadow-2xl
                  "
                >
                  <CardContent className="p-0">

                    {/* Image wrapper */}
                    <div className="relative aspect-video overflow-hidden rounded-[1.15rem]">

                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        className="object-cover transition-transform duration-700
                         ease-out group-hover:scale-105"
                      />

                      {/* Dark gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                      {/* Top row */}
                      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">

                        {/* Number + type */}
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 min-w-8 items-center justify-center rounded-full border border-white/10 bg-black/30 px-2 font-[Manrope] text-[10px] font-medium text-white/70 backdrop-blur-md">
                            0{index + 1}
                          </span>

                          <Badge
                            variant="outline"
                            className="rounded-full border-white/15 bg-black/30 px-3 py-1 font-[Manrope] text-[10px] uppercase tracking-wider text-white/70 backdrop-blur-md"
                          >
                            {project.type}
                          </Badge>
                        </div>

                        {/* Arrow */}
                        <div className="
                          flex h-10 w-10 items-center justify-center
                          rounded-full border border-white/15 g-black/30 text-white backdrop-blur-md
                          transition-all duration-300 group-hover:-translate-y-1
                          group-hover:translate-x-1 group-hover:bg-white group-hover:text-black
                        ">
                            <a href={project.href}>
                                 <ArrowUpRight size={18} />
                            </a>
                        </div>
                      </div>

                      {/* Project information */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                        <h3 className="font-syne text-xl font-semibold tracking-tight text-white md:text-2xl">
                          {project.title}
                        </h3>

                        <p className="mt-1 max-w-sm font-[Manrope] text-sm leading-5 text-white/60">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom label */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex items-center justify-end gap-3 pr-2"
          >
            <span className="font-[Manrope] text-xs text-text-secondary">
              A glimpse of what I build
            </span>

            <span className="h-px w-10 bg-border-strong" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}