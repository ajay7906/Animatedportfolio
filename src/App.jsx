

import { useEffect, useState } from 'react'
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
// import AdminDashboard from './admin/dashboard/AdminDashboard'
import Tutorials from './pages/Tutorials'
import TutorialPage from './pages/TutorialPage'
import Login from './pages/Login'
import BlogPostAdmin from './admin/post/PostBlog'
import AdminDashboard from './admin/dashboard/AdminDashboard'
import useAuthStore from './context/userContaxt'
function App() {
  const [count, setCount] = useState(0)
  const init = useAuthStore((state) => state.init);

  useEffect(() => {
    init();
  }, [init]);


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
        
       
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/uploadBlog' element={<BlogPostAdmin/>}/>
        {/* <Route path='/adminDashboard' element={<AdminDashboard/>}/> */}
        <Route path="/tutorials" element={<Tutorials/>} />
        <Route path="/tutorials/:id" element={<TutorialPage/>} />
        <Route path='/login' element={<Login/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App












