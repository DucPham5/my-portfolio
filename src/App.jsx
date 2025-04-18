import { useState } from 'react'
import {motion} from "framer-motion"
import myImage from './assets/IMG_8452.jpg';
import './App.css'

function App() {
  const header = "Hello, I'm Duc".split(" ")
  const intro = "Welcome to my personal portfolio! I am a Computer Science student at the University of Houston and currently serve as an Academic Support Assistant.".split(" ")
  const interest = " My interests lie in full-stack development, user experience, and scalable software design. I enjoy working on projects that combine functionality with clean, modern design, and I’m always seeking opportunities to grow as a developer.".split(" ")
  return (
    <div className = "portfolio-wrapper">
    <nav className = "nav-sections">
      <a href="#aboutMe">About Me</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
    </nav>
    <motion.section 
    id = "aboutMe" 
    className = "aboutMe"
    initial = {{opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.4 }}
    >
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
      <p>{intro.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay:  i * 0.1 + header.length * 0.1 + 0.3, 
            duration: 0.5
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}</p>
      <p>{interest.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay:  i * 0.1 + intro.length * 0.1 + 0.5, 
            duration: 0.5
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}</p>
      <motion.div 
      className = "resume-wrapper"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}>
      <a href="/Duc_Pham_Resume_41525.pdf" target = "_blank" onClick={()=>setMyResumeSelected(true)}>
        <h2>My Resume</h2>
        </a>
            <div className = "resume-preview-container">
          
          <embed 
              src="/Duc_Pham_Resume_41525.pdf#toolbar=0&navpanes=0&scrollbar=0" 
              type="application/pdf" 
              width="80%" 
              height="400px" 
              style={{
               
                borderRadius: "20px"
              }}
            />
        </div>


        
      </motion.div>
    </motion.section>
    <motion.section 
    id = "Projects" 
    className = "Projects"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    >
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum dignissimos at error odit doloremque quam explicabo numquam. Vero nam eos laboriosam voluptatem exercitationem accusantium dolorum aliquam, fugit eaque natus!</p>
    </motion.section>
    <motion.section id = "Contact"> 

    </motion.section>
    </div>
  )
}

export default App
