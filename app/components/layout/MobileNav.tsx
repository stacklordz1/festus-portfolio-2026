'use client'
import Link from "next/link"
import ThemeToggle from "../ui/themetoggle"
import { useState } from "react"
import { Button } from "../ui/button"
import { Menu, X } from "lucide-react"
import { navigation } from "@/app/lib/navigation"

export default function MobileNav() {
  const [isOpen, setOpen] = useState(false)

  const closeMenu = () => { setOpen(false) }
  return (
    <nav className="md:hidden flex items-center gap-3 fixed top-6 z-100 left-1/2 -translate-x-1/2 glass rounded-2xl shadow-lg px-3 py-3 whitespace-nowrap">
      <div className="flex items-center justify-between max-w-7xl gap-4">
        {/* logo/avatar */}
        <Link href={'/'} className="text-xl font-extrabold text-text-primary">
          Festus
          <span className="text-blue-700">.Dev</span>
        </Link> 

        {/* theme toggle */}
        <ThemeToggle />

        {/* navigation logic */}
        {/* Mobile toggle */}
        <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
          {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </Button>

        {/* nav items */}
        {isOpen && (
          <div className="">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
