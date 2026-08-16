'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {ArrowRight} from 'lucide-react'
import Link from "next/link";
import {motion} from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.7 },
  },
}
 
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
}

export default function Hero() {
    

  return (
    <section className="relative min-h-screen overflow-hidden">
        <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-y-0 right-0 w-[65%] md:w-[52%]">
            <Image src='/profile.jpg'
            alt="Festus-image"
            fill priority
            className="object-cover"/>

            <span className="absolute inset-0 bg-linear-to-r from-background via-background/40 to-transparent"/>
        </motion.div>

        <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-xl pt-44 pb-24 pl-6 md:pl-20">

            <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-1.5 text-xs 
            font-medium tracking-wide text-text-secondary">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"/>
                    BUILDING &middot; OPEN TO WORK
            </motion.div>

            <motion.div 
             variants={fadeUp}
            className="mt-8 rounded-2xl px-8 py-10
            shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
                <motion.h1   variants={fadeUp}
                className="font-syne text-4xl sm:text-5xl tracking-tight leading-[1.1] text-text-secondary">
                  Hey, I&apos;m{" "}
            <span className="font-bold text-text-primary">Festus</span>
            <br />
            <span className="font-bold text-text-primary">Jnr.</span>

                </motion.h1>

                <motion.p  variants={fadeUp}
                className="mt-5 text-base text-text-secondary font-[Manrope]">
                     Self-Taught Developer &middot; Founding Pantheon
                </motion.p>

                <motion.p  variants={fadeUp}
                className="mt-4 text-sm text-text-secondary font-[Manrope] leading-relaxed">
            I build software to solve real problems and make people's lives
            a little easier — currently shipping personal projects,
             while helping build Pantheon from the ground up.
                </motion.p>

            <motion.div  variants={fadeUp}
            className="mt-8 flex  items-center gap-3">
                <Button className="rounded-full group  px-6 font-bold">
                    <Link href='#projects' className="inline-flex items-center gap-2">
                    View Projects
                    <ArrowRight className="transition-transform group-hover:translate-x-1"/>
                    </Link>
                </Button>

                <Button className=" group rounded-full px-6 font-bold" variant='outline'>
                <a href="/resume.pdf" className="inline-flex items-center gap-2">
                Resume
                <ArrowRight className="transition-transform group-hover:translate-x-1"/>
                    </a>
                </Button>

            </motion.div>
        </motion.div>  
        </motion.div>
      
      <motion.div 
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
       className="absolute bottom-6 right-6 z-10 rounded-full glass px-3 py-1.5 text-xs font-medium text-text-primary">
        <a href="https://www.instagram.com/buildwithfestus">
        @stacklordz 
        </a>
      </motion.div>
    </section>
  )
}
