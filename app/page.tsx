import About from "./components/sections/about"
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
    </main>
  )
}

export default Home