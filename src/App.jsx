import { useState } from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import {motion} from "framer-motion"
import './App.css'
import ProjectCard from './components/projectCard';
import AboutMe from './components/aboutMe';


const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Framer Motion.",
    img: "/test.webp",

  },
  {
    title: "Weather App",
    description: "A web app that fetches weather data using an API."
  },
  {
    title: "Task Manager",
    description: "A task tracking tool with local storage and custom styling."
  },
  {
    title: "E-commerce Site",
    description: "A full-stack e-commerce application with user authentication and payment integration."
  }
];



function App() {
  const header = "> Duc Pham".split(" ")
  const intro = "Welcome to my personal portfolio! I am a Computer Science student at the University of Houston and am an incoming software engineering intern at Boeing.".split(" ")
  return (
    <div className = "portfolio-wrapper" style={{ position: 'relative' }}>
    <nav className = "nav-sections">
      <a href="#aboutMe">About Me</a>
      <a href="#Projects">Projects</a>
      <a href = "Experience">Experience</a>
      <a href="#Contact">Contact</a>
    </nav>
    {/*end of navbar */}

    <AboutMe header={header} intro={intro} />
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
      <div className="projects-container">
  {projects.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ))}
</div>

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
