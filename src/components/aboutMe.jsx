// AboutMe.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

function AboutMe({ header, intro }) {
  return (
    <motion.section
      id="aboutMe"
      className="aboutMe"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="aboutMe-title">
        <h1>
          {header.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </h1>
      </div>
      <div className="aboutMe-description">
        <p>
          {intro.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: header.length * 0.1 + 0.4,
                duration: 0.5,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>
      </div>
      <div className="resumeWrapper">
        <a
          href="/Duc_Resume_2025_q2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          Resume <FiArrowUpRight className="resume-icon" style={{ verticalAlign: "middle" }} />
        </a>
      </div>
    </motion.section>
  )
}

export default AboutMe
