import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './PortFolio'
import Hero from './components/hero/Hero'
import AboutAndExperience from './components/aboutandexp/AboutAndExperience'
import SkillAndExperience from './components/skills/SkillAndExperience'
//import Skills from './components/aboutandexp/AboutAndExperience'
//import Hero from './assets/hero/Hero'
import Skills from './components/skills/SkillAndExperience'
import ContactAndFooter from './components/contactAndFooter/ContactAndFooter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <AboutAndExperience/>
    <Skills/>
    <ContactAndFooter/>
    </>
  )
}

export default App
