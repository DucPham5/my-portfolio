import { useState } from 'react'
import {motion} from "framer-motion"
import './App.css'

function App() {
  const header = "> Duc Pham".split(" ")
  const intro = "Welcome to my personal portfolio! I am a Computer Science student at the University of Houston and am an incoming software engineering intern at Boeing.".split(" ")
  const interest = " My interests lie in full-stack development, user experience, and scalable software design. I enjoy working on projects that combine functionality with clean, modern design, and I’m always seeking opportunities to grow as a developer.".split(" ")
  return (
    <div className = "portfolio-wrapper">
    <nav className = "nav-sections">
      <a href="#aboutMe">About Me</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
    </nav>
    {/*end of navbar */}

    <motion.section 
    id = "aboutMe" 
    className = "aboutMe"
    initial = {{opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.4 }}
    >
      <div class = "aboutMe-title">
      <h1>{header.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i /10
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}</h1>
      </div>
      <div class = "aboutMe-description">
      <p>{intro.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay:  header.length * 0.1 + 1.0, 
            duration: 0.5
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}</p>
      </div>
    </motion.section>
    {/*end of aboutMe section */}

    <motion.section 
    id = "Projects" 
    className = "Projects"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    >
      <h2>Projects</h2>
      <div className = "projects-container">
          <div className = "projects">

          </div>
          <div className = "projects">
            
          </div>
          <div className = "projects">
            
          </div>


      </div>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum dignissimos at error odit doloremque quam explicabo numquam. Vero nam eos laboriosam voluptatem exercitationem accusantium dolorum aliquam, fugit eaque natus!</p>
    </motion.section>
    {/*end of projects section */}

    <motion.section id = "Contact"> 

    </motion.section>
    {/*end of contact section */}


      <motion.section 
      className = "contact"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}>
        
      </motion.section>
    </div>
  )
}

export default App
