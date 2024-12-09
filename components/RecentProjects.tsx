"use client"
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import {motion} from 'framer-motion'

const RecentProjects = () => {
    return (
        <section id='projects' className='mb-36'>
            <motion.div
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 2, delay: .1 }}
             className='my-20'>
                <h1 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words font-bold'>Some of my recent <span className='text-purple'>Projects</span></h1>
            </motion.div>
            <div className='flex flex-wrap gap-x-28 gap-y-24 mt-10 items-center justify-center p-4'>
                {projects.map((item,idx) => (
                    <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: (idx+1) * 0.3 }}
                     className=' flex items-center justify-center w-[80vw] sm:w-96 md:w-[450px] h-[21rem]'>
                        <PinContainer title='dlfsfl'>
                            <div className="flex  flex-col p-2 tracking-tight text-slate-100/50  w-[80vw] sm:w-96 md:w-[450px] h-[21rem] ">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAJ3qq5VboyQBNN4_rBxQL3_zPLX4efETmA&s"
                                    alt="Descriptive Alt Text"
                                    className="flex flex-1 w-full rounded-lg mt-4"
                                />
                                <h3 className="max-w-xs mt-2 font-bold  text-base text-slate-100 ">
                                    Aceternity UI
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal ">
                                    <span className="text-slate-400 line-clamp-2 text-xs">
                                        Customizable Tailwind CSS and Framer Motion Components.Customizable Tailwind CSS and Framer Motion Components.Customizable Tailwind CSS and Framer Motion Components.
                                    </span>
                                </div>
                            </div>
                        </PinContainer>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default RecentProjects