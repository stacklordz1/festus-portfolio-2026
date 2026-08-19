// app/data/skills.ts
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFramer,
} from "react-icons/si";
import { Database, Layers, Sparkles, Workflow } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { IoLogoCss3 } from "react-icons/io5";

export type Skill = {
  name: string;
  icon?: IconType | LucideIcon;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: Database },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Stack",
    skills: [{ name: "MERN", icon: Layers }],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    category: "Exploring",
    skills: [
      { name: "AI", icon: Sparkles },
      { name: "Automation", icon: Workflow },
    ],
  },
];
