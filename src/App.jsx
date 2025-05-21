import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/landing_Page/Nav'
import Home from './Components/landing_Page/Home'
import About from './Components/landing_Page/About'
import Skills from './Components/landing_Page/Skills'
import Projects from './Components/landing_Page/Projects'
import Contact from './Components/landing_Page/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
