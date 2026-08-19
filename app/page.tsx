import About from "./components/sections/about"
import Contact from "./components/sections/contact"
import Hero from "./components/sections/hero"
import Projects from "./components/sections/project"
import Skills from "./components/sections/skill"




const Home = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default Home