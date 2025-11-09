

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Portfolio from './PortFolio'
import Hero from './components/hero/Hero'
import AboutAndExperience from './components/aboutandexp/AboutAndExperience'
import SkillAndExperience from './components/skills/SkillAndExperience'
import ContactAndFooter from './components/contactAndFooter/ContactAndFooter'
import Blog from './pages/BlogPages'
import AdminLogin from './admin/AdminLogin'
import AdminDashboard from './admin/dashboard/AdminDashboard'
import Tutorials from './pages/Tutorials'
import TutorialPage from './pages/TutorialPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Main page route */}
        <Route path="/" element={
          <>
            <Hero/>
            <AboutAndExperience/>
            <SkillAndExperience/>
            <ContactAndFooter/>
          </>
        }/>
        
        {/* Portfolio page route */}
        {/* <Route path="/portfolio" element={<Portfolio/>}/> */}
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/adminDashboard' element={<AdminDashboard/>}/>
        <Route path="/tutorials" element={<Tutorials/>} />
        <Route path="/tutorials/:id" element={<TutorialPage/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App