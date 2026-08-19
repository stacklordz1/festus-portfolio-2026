'use client'
import Link from "next/link"
import ThemeToggle from "../ui/themetoggle"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { navigation } from "@/app/lib/navigation"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { socials } from "@/app/data/contacts"

export default function MobileNav() {
  const [isOpen, setOpen] = useState(false)
  const [barHidden, setBarHidden] = useState(false)

  const closeMenu = () => { setOpen(false) }
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const {scrollY} = useScroll()
  useMotionValueEvent(scrollY, "change", (latest)=>{
    const previous = scrollY.getPrevious()??0
      setBarHidden(latest > previous&& latest > 80 )
  })
  return (
    <>
     <motion.nav 
     variants={{visible: {y: 0}, hidden: {y:"-150%"}}}
    animate={barHidden && !isOpen ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
     className="md:hidden flex items-center justify-between gap-3 fixed top-6 z-100 left-1/2 -translate-x-1/2 glass backdrop-blur-xl rounded-2xl shadow-lg p-3 w-80 ">
        {/* logo/avatar */}
        <Link href={'/'} className="text-xl font-extrabold text-text-primary">
          Festus
          <span className="text-blue-700">.Dev</span>
        </Link> 

      <div className="flex items-center gap-1">
        {/* theme toggle */}
        <ThemeToggle />

        
        {/* Mobile toggle */}
        <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
          {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </Button>

      </div>
     </motion.nav>

      
 {/* full-screen nav overlay */}
 <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 glass backdrop-blur-2xl px-8 z-90 flex flex-col justify-center"
          initial={{opacity: 0}}
          animate= {{opacity: 1}}
          exit={{opacity: 0 }}
           transition={{ duration: 0.3 }}>
          
            <div className="flex flex-col gap-6">
              {navigation.map((item, i) => (
              <motion.div key={item.href}
              initial={{opacity: 0, y:20}}
              animate={{opacity:1, y: 0}}
              transition={{delay: i * 0.10, duration: 0.25}}>
                <Link href={item.href}  onClick={closeMenu}
                className={`group flex items-center justify-between text-2xl font-semibold text-text-muted hover:text-text-secondary`}>
                  {item.title}
                  <ArrowRight className="transition-transform group-hover:translate-x-1"/>
                </Link>

                </motion.div>
              ))}
            </div>

            {/* Resume */}
        <motion.div className="mt-10"
        initial={{opacity: 0, y:20}}
        animate={{opacity:1, y: 0}}
        transition={{ delay: navigation.length * 0.10, duration: 0.25 }}>
          <Button className={`w-full`} onClick={closeMenu} variant={"outline"}>
          <Link target="_blank" href={'/resume.pdf'} 
          >
          Resume
          </Link>

          </Button>
        </motion.div>

        {/* socials */}
        <motion.div 
        initial={{opacity: 0, y:20}}
        animate={{opacity:1, y: 0}}
        transition={{ delay: (navigation.length + 2 )* 0.06, duration: 0.25 }}
        className="mt-6 flex items-center justify-center gap-6 ">
          {socials.map(({icon: Icon, href, label})=>(
            <Link href={href} key={label} rel='noopener noreferrer' onClick={closeMenu}
            className="text-text-muted hover:text-text-secondary transition-colors">
                <Icon size={24}/>
            </Link>
          ))}
        </motion.div>
          </motion.div>
        )}

                
        </AnimatePresence>
      
    </>
   
  )
}
