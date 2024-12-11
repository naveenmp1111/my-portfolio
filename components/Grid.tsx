"use client"
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import {motion} from 'framer-motion'

const Grid = () => {
  return (
    <section id='about' className='md:mt-10 sm:mt-5 mt-1'>
       <div
        className='md:mb-20 mb-14 md:mt-5 z-20'>
        <h1 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words font-bold'>About <span className='text-purple'>Me.</span></h1>
      </div>
      <BentoGrid>
          {gridItems.map((item,idx)=>(
            <BentoGridItem key={idx} id={item.id} title={item.title} description={item.description} className={item.className} image={item.img} index={idx}/>
          ))}
      </BentoGrid>
    </section>
  )
}

export default Grid