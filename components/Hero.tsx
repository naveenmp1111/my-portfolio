"use client"
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'

const Hero = () => {
    return (
        <section id='home'>
            <div className='pb-1 md:pb-16 md:pt-36 lg:36 pt-28'>
                <div>
                    <Spotlight className='left-0 top-0 h-screen' fill='white' />
                </div>

                <div className="md:h-[700px] h-[550px] sm:h-[600px] w-full dark:bg-black-100  dark:bg-grid-white/[0.05] bg-grid-black/[0.02] flex items-center justify-center absolute top-0 left-0">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                </div>

                <div className='flex justify-center relative my-20 z-10'>
                    <div
                        className='max-w-[89vw] flex flex-col md:gap-0 gap-2'>
                        <h2 className='uppercase tracking-widest sm:text-sm text-xs text-center dark:text-blue-100 text-blue-950'>Hey! I'm excited to share my journey with you.</h2>
                        <TextGenerateEffect
                            className='text-center text-[28px] sm:text-[40px] md:text-5xl lg:text-6xl'
                            words="I'm Naveen M.P., a passionate MERN Stack Developer from Kochi, Kerala."
                        />
                        <p className='text-center tracking-widest break-words md:text-normal text-sm'> I specialize in creating dynamic and scalable web applications that drive success.</p>
                        <a href="#projects" className='flex justify-center md:mt-10 mt-9'>
                            <MagicButton title='See My Work' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero