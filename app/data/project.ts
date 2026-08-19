export type ProjectStatus = "live" | "in-progress";

export type Project = {
  title: string;
  description: string;
  type: string;
  status: ProjectStatus;
  tech: string[];
  image: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "PAGE AI",
    description: "A Friendly AI Tutor.",
    type: "Team Project",
    status: "live",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/pageai-web.png",
    href: "https://page-ai-web.vercel.app/",
  },
  {
    title: "SHIFT",
    description: "A productivity app.",
    type: "Team Project",
    status: "live",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/shift-web.png",
    href: "https://shift-web-ochre.vercel.app",
  },
  {
    title: "MY PORTFOLIO",
    description: "A little info about me.",
    type: "Personal Project",
    status: "live",
    tech: ["Next.js", "TypeScript", "Tailwind CSS v4", "Shadcn", 'Framer-motion'],
    image: "/images/portfolio.png",
    href: "https://festus-jnr-portfolio.vercel.app/",
  },
];