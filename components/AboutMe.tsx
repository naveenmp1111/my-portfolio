'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { BackgroundBeams } from './ui/Background-beams'

const AboutMe = () => {
  return (
    <section>
            <div className="md:h-[80vh] h-screen sm:[70vh] w-full flex items-center justify-center px-10 py-5 relative">
                
                <motion.p
                    className="text-center tracking-wider md:text-lg text-sm opacity-1 font-thin leading-loose md:leading-loose"
                    initial={{ opacity: 0, fontWeight: 400,y:100 }}
                    whileInView={{ opacity: 1, fontWeight: 400,y:0 }}
                    transition={{ duration: 3 ,delay:.5}}
                    viewport={{ once: true }}
                    
                >
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a 
                    Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin 
                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in 
                    classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                    written in 45 BC. This book is a treatise on the theory of ethics, very popular during the 
                    Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in 
                    section 1.10.32.
                </motion.p>
               <BackgroundBeams/>
            </div>
        </section>
  )
}

export default AboutMe