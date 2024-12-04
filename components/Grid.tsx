import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about' className='mt-60'>
      <BentoGrid>
          {gridItems.map((item,idx)=>(
            <BentoGridItem key={idx} id={item.id} title={item.title} description={item.description} className={item.className} image={item.img} />
          ))}
      </BentoGrid>
    </section>
  )
}

export default Grid