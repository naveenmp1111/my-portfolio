"use client"
import React from 'react'
import SignupFormDemo from './ContactForm'
import { motion } from 'framer-motion'

const FormGrid = () => {
  return (
    <section id='contact'>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: .1 }}
        className='my-14'>
        <h1 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words font-bold'><span className='text-purple'>Connect</span> with me.</h1>
      </motion.div>

      <div className="h-fit w-full grid md:grid-cols-2 grid-cols-1 p-10 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: .2 }}
          className="flex justify-center items-center order-2 md:order-1">
          <img
            className="rounded-full md:h-80 md:w-80"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvbkDwk_0ACUPeQFf1k0O-lmEvHb4-0klh2Y81_I0I07ARBSjN4pBSgOIDJG-ZyoMZFYg&usqp=CAU"
            src="https://res.cloudinary.com/dwxhfdats/image/upload/v1733730078/nl0wxgjgsl5dpmtrv9zc.png"
            alt="image"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: .3 }}
          className="flex justify-center items-center order-1 md:order-2">
          <SignupFormDemo />
        </motion.div>
      </div>
    </section>
  )
}

export default FormGrid