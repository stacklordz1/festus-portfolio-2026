
"use client";

import { skills } from "../../data/skill";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "../ui/card";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
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

const stats = [
  { value: "2.5+", label: "Years Coding" },
  { value: "8+", label: "Languages & Tools" },
  { value: "MERN", label: "Primary Stack" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
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
              02 — Skills
            </span>
          </motion.div>

          {/* Header row: heading + stats */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            {/* Left — heading + description */}
            <div className="max-w-2xl">
              <motion.h2
                variants={fadeUp}
                id="skills-heading"
                className="font-syne text-4xl font-medium leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl"
              >
                Tools I reach for{" "}
                <span className="text-text-secondary">to build things.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 font-[Manrope] text-sm leading-7 text-text-secondary md:text-base"
              >
                A stack built by shipping — learning React, Node and Python by
                building real things, not just tutorials.
              </motion.p>
            </div>

            {/* Right — stat cards */}
            <motion.div
              variants={container}
              className="grid grid-cols-3 gap-3 lg:min-w-[380px]"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <Card className="border-border bg-background/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border-strong">
                    <CardContent className="flex flex-col items-center justify-center gap-1 px-3 py-6 text-center">
                      <p className="font-syne text-2xl font-medium text-text-primary">
                        {stat.value}
                      </p>
                      <p className="font-[Manrope] text-[10px] uppercase tracking-wider text-text-secondary">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skill category cards */}
          <motion.div
            variants={container}
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skills.map((group) => (
              <motion.div key={group.category} variants={fadeUp}>
                <Card className="group border-border bg-background/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border-strong">
                  <CardContent className="p-6">
                    <p className="font-[Manrope] text-xs uppercase tracking-wider text-text-secondary">
                      {group.category}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map(({ name, icon: Icon }) => (
                        <span
                          key={name}
                          className="flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-1.5 font-[Manrope] text-xs text-text-secondary transition-colors group-hover:text-text-primary"
                        >
                          {Icon && <Icon size={13} />}
                          {name}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}