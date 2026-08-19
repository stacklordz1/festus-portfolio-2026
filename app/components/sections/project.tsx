// app/components/sections/Projects.tsx
"use client";

import { ArrowUpRight } from "lucide-react";
import { projects, Project } from "../../data/project";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { motion, Variants } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

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

const statusStyles: Record<Project["status"], string> = {
  live: "bg-green-500 animate-pulse",
  "in-progress": "bg-yellow-500",
};

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  "in-progress": "In Progress",
};

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-border-strong" />
            <span className="font-[Manrope] text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
              03 — Projects
            </span>
          </motion.div>

          {/* Heading row + GitHub CTA */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <motion.h2
              variants={fadeUp}
              id="projects-heading"
              className="max-w-2xl font-syne text-4xl font-medium leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl"
            >
              Things I&apos;ve{" "}
              <span className="text-text-secondary">built and shipped.</span>
            </motion.h2>

            <motion.div variants={fadeUp}>
              <Button variant="outline" className="group rounded-full">
                <a
                  href="https://github.com/stacklordz1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub size={16} />
                  See more on GitHub
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Carousel */}
          <motion.div variants={fadeUp} className="mt-14">
            <Carousel opts={{ align: "start", loop: false }} className="w-full">
              <CarouselContent className="-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem
                    key={project.title}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <Card
                      className="group h-full overflow-hidden rounded-[1.5rem] border-border bg-background/40
                        p-1.5 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2
                        hover:border-border-strong hover:shadow-2xl
                      "
                    >
                      <CardContent className="p-0">
                        <div className="relative aspect-video overflow-hidden rounded-[1.15rem]">
                          <Image
                            src={project.image}
                            alt={`${project.title} project preview`}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                          {/* Top row — number, status, type, link */}
                          <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="flex h-8 min-w-8 items-center justify-center rounded-full border border-white/10 bg-black/30 px-2 font-[Manrope] text-[10px] font-medium text-white/70 backdrop-blur-md">
                                0{index + 1}
                              </span>

                              <Badge
                                variant="outline"
                                className="flex items-center gap-1.5 rounded-full border-white/15 bg-black/30 px-3 py-1 font-[Manrope] text-[10px] uppercase tracking-wider text-white/70 backdrop-blur-md"
                              >
                                <span
                                  className={`h-1.5 w-1.5 rounded-full ${statusStyles[project.status]}`}
                                />
                                {statusLabel[project.status]}
                              </Badge>

                              <Badge
                                variant="outline"
                                className="rounded-full border-white/15 bg-black/30 px-3 py-1 font-[Manrope] text-[10px] uppercase tracking-wider text-white/70 backdrop-blur-md"
                              >
                                {project.type}
                              </Badge>
                            </div>

                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black"
                            >
                              <ArrowUpRight size={18} />
                            </a>
                          </div>

                          {/* Project info + tech tags */}
                          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                            <h3 className="font-syne text-xl font-semibold tracking-tight text-white md:text-2xl">
                              {project.title}
                            </h3>
                            <p className="mt-1 max-w-sm font-[Manrope] text-sm leading-5 text-white/60">
                              {project.description}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {project.tech.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 font-[Manrope] text-[10px] text-white/60 backdrop-blur-md"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-6 flex items-center justify-end gap-2">
                <CarouselPrevious className="static translate-y-0 border-border bg-background/40 backdrop-blur-sm hover:border-border-strong" />
                <CarouselNext className="static translate-y-0 border-border bg-background/40 backdrop-blur-sm hover:border-border-strong" />
              </div>
            </Carousel>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}