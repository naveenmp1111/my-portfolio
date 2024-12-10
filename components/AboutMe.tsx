'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { BackgroundBeams } from './ui/Background-beams'

const AboutMe = () => {
  return (
    <section>
      <div className="md:h-fit h-fit sm:[70vh] w-full flex items-center justify-center  px-2 sm:px-10 py-5 relative">

        <motion.p
          className="text-start tracking-wider md:text-lg text-sm opacity-1 font-thin leading-loose md:leading-loose"
          initial={{ opacity: 0, fontWeight: 400, y: 100 }}
          whileInView={{ opacity: 1, fontWeight: 400, y: 0 }}
          transition={{ duration: 3, delay: .5 }}
          viewport={{ once: true }}

        >
          Hi, I’m Naveen, a software developer from Ernakulam with a keen passion for technology and innovation.
          I hold a Bachelor’s degree in Computer Applications from MG University, which laid the foundation for
          my journey into software development.
          <h2 className='text-start mt-5 mb-1 font-extrabold text-xl'>My Journey</h2>
          <p className='text-start'>
            After graduation, I delved into an intensive self-learning program focused on MERN stack development.
            This journey was not just about gaining technical expertise but also about cultivating discipline, adaptability, and problem-solving skills. By dedicating 12–16 hours daily, I strengthened my
            understanding of modern web development frameworks and technologies while adhering to industry standards.
          </p>
          <h2 className='text-start mt-5 mb-1 font-extrabold text-xl'>What drives me:</h2>
          <p className='text-start'>
            What excites me about software development is the endless possibilities to solve real-world problems and
            create meaningful user experiences. I value teamwork and innovation,
            and I believe in pushing the boundaries of what’s possible through collaboration and continuous learning.
          </p>
          <h2 className='text-start mt-5 mb-1 font-extrabold text-xl'>My Vision:</h2>
          <p className='text-start'>
            I am looking forward to contributing to a forward-thinking team where I can merge my technical skills
            with a shared vision to create impactful solutions. Whether it’s building scalable
            applications or working on challenging projects, I’m eager to make a difference in the tech industry.
          </p>

        </motion.p>
        <BackgroundBeams />
      </div>
    </section>
  )
}

export default AboutMe