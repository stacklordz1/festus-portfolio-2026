// "use client";

// import { motion, Variants } from "framer-motion";
// import {
//   ArrowUpRight,
//   BrainCircuit,
//   Code2,
//   Database,
//   GitBranch,
//   Smartphone,
// } from "lucide-react";

// import { Card, CardContent } from "../ui/card";
// import { Badge } from "../ui/badge";

// import { skillGroups } from "../../data/skill";

// const container: Variants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const item: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

// const categoryIcons = {
//   Frontend: Code2,
//   Backend: Database,
//   Mobile: Smartphone,
//   Tools: GitBranch,
//   "Currently Exploring": BrainCircuit,
// };

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       aria-labelledby="skills-heading"
//       className="relative overflow-hidden py-28 md:py-36"
//     >
//       <div className="mx-auto max-w-7xl px-6 md:px-10">

//         {/* ================= HEADER ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-2xl"
//         >
//           {/* Section label */}
//           <div className="mb-6 flex items-center gap-3">
//             <span className="h-px w-8 bg-border-strong" />

//             <span className="font-[Manrope] text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
//               02 — Skills
//             </span>
//           </div>

//           {/* Heading */}
//           <h2
//             id="skills-heading"
//             className="font-syne text-4xl font-medium leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl"
//           >
//             What I use to turn{" "}
//             <span className="text-text-secondary">
//               ideas into software.
//             </span>
//           </h2>

//           <p className="mt-6 max-w-xl font-[Manrope] text-sm leading-7 text-text-secondary md:text-base">
//             A growing toolkit built through projects, experimentation, and
//             a lot of figuring things out along the way.
//           </p>
//         </motion.div>

//         {/* ================= SKILLS ================= */}

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//           className="mt-14 grid gap-4 md:grid-cols-2"
//         >
//           {skillGroups.map((group) => {
//             const Icon =
//               categoryIcons[group.title as keyof typeof categoryIcons];

//             return (
//               <motion.div
//                 key={group.title}
//                 variants={item}
//               >
//                 <Card
//                   className="
//                     group
//                     h-full
//                     rounded-2xl
//                     border-border
//                     bg-background/40
//                     backdrop-blur-sm
//                     transition-all
//                     duration-500
//                     hover:-translate-y-1
//                     hover:border-border-strong
//                     hover:shadow-xl
//                   "
//                 >
//                   <CardContent className="p-6 md:p-7">

//                     {/* Category header */}
//                     <div className="flex items-start justify-between">

//                       <div className="flex items-start gap-4">

//                         {/* Icon */}
//                         <div
//                           className="
//                             flex
//                             h-10
//                             w-10
//                             shrink-0
//                             items-center
//                             justify-center
//                             rounded-xl
//                             border
//                             border-border
//                             bg-background
//                             text-text-primary
//                             transition-all
//                             duration-300
//                             group-hover:border-border-strong
//                           "
//                         >
//                           <Icon size={18} />
//                         </div>

//                         {/* Text */}
//                         <div>
//                           <h3 className="font-syne text-lg font-semibold text-text-primary">
//                             {group.title}
//                           </h3>

//                           <p className="mt-1 max-w-sm font-[Manrope] text-xs leading-5 text-text-secondary">
//                             {group.description}
//                           </p>
//                         </div>

//                       </div>

//                       <ArrowUpRight
//                         size={16}
//                         className="
//                           text-text-secondary
//                           opacity-0
//                           transition-all
//                           duration-300
//                           group-hover:-translate-y-0.5
//                           group-hover:translate-x-0.5
//                           group-hover:opacity-100
//                         "
//                       />
//                     </div>

//                     {/* Divider */}
//                     <div className="my-6 h-px bg-border" />

//                     {/* Skills */}
//                     <div className="flex flex-wrap gap-2">
//                       {group.skills.map((skill) => {
//                         const Icon = skill.icon;

//                         return (
//                           <Badge
//                             key={skill.name}
//                             variant="outline"
//                             className="
//                               group/skill
//                               rounded-full
//                               border-border
//                               bg-background/40
//                               px-3
//                               py-2
//                               font-[Manrope]
//                               text-xs
//                               font-medium
//                               text-text-secondary
//                               transition-all
//                               duration-300
//                               hover:border-border-strong
//                               hover:bg-background
//                               hover:text-text-primary
//                             "
//                           >
//                             <Icon
//                               size={14}
//                               className="mr-1.5 transition-transform duration-300 group-hover/skill:scale-110"
//                             />

//                             {skill.name}
//                           </Badge>
//                         );
//                       })}
//                     </div>

//                   </CardContent>
//                 </Card>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* ================= BOTTOM STATEMENT ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="
//             mt-6
//             flex
//             flex-col
//             gap-4
//             rounded-2xl
//             border
//             border-border
//             bg-background/30
//             p-5
//             backdrop-blur-sm
//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           "
//         >
//           <div>
//             <p className="font-[Manrope] text-xs uppercase tracking-[0.15em] text-text-secondary">
//               Always learning
//             </p>

//             <p className="mt-1 font-syne text-base font-medium text-text-primary">
//               The stack keeps evolving.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             <Badge
//               variant="outline"
//               className="rounded-full border-border px-3 py-1.5 text-xs text-text-secondary"
//             >
//               Python
//             </Badge>

//             <Badge
//               variant="outline"
//               className="rounded-full border-border px-3 py-1.5 text-xs text-text-secondary"
//             >
//               AI
//             </Badge>

//             <Badge
//               variant="outline"
//               className="rounded-full border-border px-3 py-1.5 text-xs text-text-secondary"
//             >
//               Automation
//             </Badge>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }