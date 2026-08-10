import { navigation } from "@/app/lib/navigation"
import { ArrowRight } from "lucide-react"


const Navbar = () => {
  return (
    <nav className="glass flex items-center justify-between fixed top-6 left-1/2 -translate-x-1/2 rounded-2xl">
      {/* avatar/logo */}
      <div>
        {/* <Image src='/favicon.ico' width={32} height={32} alt="Festus"/> */}
      </div>

      {/* nav content */}
      <div>
        {navigation.map((item)=>(
          <a href={item.href} key={item.href}
          className="">
            {item.title}
          </a>
        ))}
      </div>

      {/* resume */}
      <div>
        <a href="" download>
          Resume
        </a>
        <ArrowRight/>
      </div>
    </nav>
  )
}

export default Navbar