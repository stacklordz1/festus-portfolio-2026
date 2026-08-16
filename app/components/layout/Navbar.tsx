'use client'

import { navigation } from "@/app/lib/navigation"
import Link from "next/link"
import { useState } from "react";
import ThemeToggle from "../ui/themetoggle";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";


export default function Navbar() {
    const [activeHref, setActiveHref] = useState("#about");  
    const [barHidden, setBarHidden] = useState(false)

    const {scrollY} = useScroll()

  useMotionValueEvent(scrollY, "change", (latest)=>{
    const previous = scrollY.getPrevious()??0
      setBarHidden(latest > previous&& latest > 80 )
  })
  return (
    <motion.nav 
     variants={{visible: {y: 0}, hidden: {y:"-150%"}}}
    animate={barHidden? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    className="hidden md:flex items-center gap-3 z-50 fixed top-6 left-1/2 -translate-x-1/2 glass backdrop-blur-xl rounded-2xl shadow-lg
       px-3 py-3 whitespace-nowrap">
      <div className="flex items-center justify-between max-w-7xl gap-4">
        {/* logo/avatar */}
        <Link href={'/'}
        className="text-xl font-extrabold text-text-primary">
          Festus
          <span className="text-blue-700">.Dev</span>
        </Link>

        {/* divider */}
        <span className="w-px h-5 border border-border-strong"/>

        {/* navigation */}
        <div className="flex items-center gap-4">
          {navigation.map((item)=>{
            const isActive = activeHref === item.href;
            return(
                <Link href={item.href} key={item.href}
                onClick={()=> setActiveHref(item.href)}
                className={` rounded-xl px-3 py-1.5 text-sm font-semibold  transition-all duration-200
                ${isActive? 'bg-white/[0.07] text-text-primary':'text-text-secondary hover:bg-white/4 hover:text-text-primary'}`}>
                     {item.title}
                </Link>
            )
          })}
        </div>

        {/* divider */}
        <span className="w-px h-5 border border-border-strong"/>

        {/* resume */}
        <a href="/resume.pdf" download
        className="group">
          <Button>
        <span className="font-bold">Resume</span>
        <ArrowUpRight size={24}
        strokeWidth={2}
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5"
            />
        </Button>
        </a>
 {/* divider */}
        <span className="w-px h-5 border border-border-strong"/>

{/* theme toggle */}
<ThemeToggle/>
      </div>      
    </motion.nav>
  )
}
