"use client"
import React from 'react'
import SignupFormDemo from './ContactForm'
import { motion } from 'framer-motion'
import { FloatingDock } from './ui/Floating-dock'
import { SiLeetcode, SiMongodb } from 'react-icons/si'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { BackgroundBeams } from './ui/Background-beams'
import { FaXTwitter } from 'react-icons/fa6'

const FormGrid = () => {
  const links = [
    {
      title: "GitHub",
      icon: (
        <FaGithub className="h-full w-full text-black dark:text-gray-200 hover:text-gray-700 dark:hover:text-white" />
      ),
      href: "https://github.com/naveenmp1111",
    },
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-blue-700 dark:text-blue-700 hover:text-blue-800 dark:hover:text-blue-600" />
      ),
      href: "https://www.linkedin.com/in/naveen-mp-a357a6289/",
    },
    {
      title: "LeetCode",
      icon: (
        <SiLeetcode className="h-full w-full text-orange-600 dark:text-orange-600 hover:text-orange-800 dark:hover:text-orange-500" />
      ),
      href: "https://leetcode.com/u/naveenmp1111/",
    },
    {
      title: "Twitter",
      icon: (
        <FaXTwitter className="h-full w-full text-blue-500 dark:text-gray-200 hover:text-blue-700 dark:hover:text-white" />
      ),
      href: "https://x.com/naveenmp666",
    },
  ];
  
  return (
    <section id='contact' className='h-3/4 relative'>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: .1 }}
        className='mb-14'>
        <h1 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words font-bold'>Let's <span className='dark:text-purple text-green-700'>Connect</span> and <span className='dark:text-purple text-green-700'>Create </span>together.</h1>
      </motion.div>
      <h2 className="text-center md:text-2xl sm:text-xl text-sm font-semibold text-gray-400 mb-10 md:mb-4">
        Share your ideas, thoughts, or just drop a message. I’d love to hear from you!
      </h2>

      <div className="h-fit w-full grid md:grid-cols-2 grid-cols-1 sm:p-10 pb-16 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 0.2 }}
          className="flex flex-col justify-center items-center text-center order-2 md:order-1 z-10"
        >
          <FloatingDock items={links} className='mb-10 mt-14' />
          <img
            className="h-10 w-10 mb-2"
            src="https://res.cloudinary.com/dwxhfdats/image/upload/v1733730078/nl0wxgjgsl5dpmtrv9zc.png"
            alt="small logo"
          />
          <p className="text-gray-500 font-medium text-xs md:text-[14px]">
            Designed and developed by Naveen MP
          </p>
          <p className="dark:text-gray-300 text-gray-500 text-sm m-1">© 2024</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: .3 }}
          viewport={{ once: true }}
          className="flex justify-center items-center order-1 md:order-2 z-10">
          <SignupFormDemo />
        </motion.div>
      </div>
      {/* <BackgroundBeams /> */}
    </section>
  )
}

export default FormGrid