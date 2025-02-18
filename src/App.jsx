import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Menu } from "./components/Menu";
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";

function App() {

  return (
    <> 
      <Menu />
      <Presentation />
      <Experience />
      <Projects />
      <AboutMe />
    </>
  )
}

export default App
