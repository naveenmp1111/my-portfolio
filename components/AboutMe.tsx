'use client'
import React from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <section>
      <div className="md:h-fit h-fit sm:[70vh] w-full flex items-center justify-center px-2 sm:px-10 py-5 relative">
        <div className="text-start tracking-wider md:text-lg text-sm opacity-1 font-normal leading-loose md:leading-loose">
          {/* Introduction */}
          <motion.p
            className="text-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hi, I’m Naveen, a software developer from Ernakulam with a keen passion for technology and innovation.
            I hold a Bachelor’s degree in Computer Applications from MG University, which laid the foundation for
            my journey into software development.
          </motion.p>

          {/* My Journey */}
          <motion.h2
            className="text-start mt-5 mb-1 font-extrabold text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.h2>
          <motion.p
            className="text-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            After graduation, I delved into an intensive self-learning program focused on MERN stack development.
            This journey was not just about gaining technical expertise but also about fostering discipline, adaptability, and problem-solving skills. By dedicating myself, I strengthened   
            understanding of modern web development frameworks and technologies while adhering to industry standards.
          </motion.p>

          {/* What drives me */}
          <motion.h2
            className="text-start mt-5 mb-1 font-extrabold text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            What drives me?
          </motion.h2>
          <motion.p
            className="text-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            What excites me about software development is the endless possibilities to solve real-world problems and
            create meaningful user experiences. I value teamwork and innovation,
            and I believe in pushing the boundaries of what’s possible through collaboration and continuous learning.
          </motion.p>

          {/* Vision */}
          <motion.h2
            className="text-start mt-5 mb-1 font-extrabold text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            My Vision:
          </motion.h2>
          <motion.p
            className="text-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            My vision is to create impactful technology that solves real-world challenges through innovation and collaboration, leaving a lasting legacy in the tech industry.
          </motion.p>

          {/* Education */}
          <motion.h2
            className="text-start mt-7 mb-2 font-extrabold text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.ul
            className="list-disc ml-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <li>
              <span className="font-bold">MERN Stack Development</span> (2023 - Present)
              <br />
              Brototype, Ernakulam
            </li>
            <li>
              <span className="font-bold">BCA - Bachelor of Computer Application</span> (2020 - 2023)
              <br />
              MG University
              <br />
              CGPA: 6.09
            </li>
          </motion.ul>
        </div>
      </div>

    </section>
  )
}

export default AboutMe