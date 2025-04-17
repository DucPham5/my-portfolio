import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className = "portfolio-wrapper">
    <nav className = "nav-sections">
      <a href="#aboutMe">About Me</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
    </nav>
    <section id = "aboutMe" className = "aboutMe">
      <img src="" alt="" />
      <h1>Hello, I'm Duc</h1>
      <p>Welcome to my personal portfolio! I am currently a student at the University of Houston studying computer science.</p>
    </section>
    <section id = "Projects">

    </section>
    <section id = "Contact"> 

    </section>
    </div>
  )
}

export default App
