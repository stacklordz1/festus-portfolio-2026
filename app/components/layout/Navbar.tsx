'use client'
import { navigation } from "@/app/lib/navigation"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [activeHref, setActiveHref] = useState('#about')

  return (
    <nav className="glass flex items-center justify-between fixed top-6 left-1/2 -translate-x-1/2 rounded-2xl
    px-4 py-6 gap-8">
      {/* avatar/logo */}
      <Link href="/" className="rounded-full overflow-hidden flex shrink-0">
        <Image src="/avatar.jpg" width={32} height={32} alt="Festus" className="rounded-full object-cover" />
      </Link>

      <div className="w-px h-4 border border-border-strong "/>

      {/* nav content */}
      <div className="flex items-center gap-1">
        {navigation.map((item) => (
          <a
            href={item.href}
            key={item.href}
            onClick={() => setActiveHref(item.href)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeHref === item.href
                ? 'text-text-primary bg-white/5'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {item.title}
          </a>
        ))}
      </div>

      {/* resume */}
      <div className="group flex items-center gap-1">
        <a href="/resume.pdf" download className="text-sm text-text-primary">
          Resume
        </a>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </nav>
  )
}

export default Navbar