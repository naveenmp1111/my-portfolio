import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='left-0 top-0 h-screen' fill='white' />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] flex flex-col'>
                    <h2 className='uppercase tracking-widest text-sm text-center text-blue-100'>Hello from the other side</h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='My pants velour, my shades dior. Create Explore Expand Conquer.'
                    />
                    <p className='text-center tracking-widest break-words'>I'm Cristiano Ronaldo, a professional Football player.</p>
                    <a href='#about' className='flex justify-center md:mt-10 mt-5'>
                       <MagicButton title='Click Here'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero