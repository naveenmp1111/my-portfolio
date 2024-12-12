"use client"
import React from 'react'
import {motion} from 'framer-motion'

const MagicButton = ({ title,onClick,icon,href}: {href?:string, title: string,onClick?:()=>void,icon?:React.ReactNode }) => {
    return (
        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
         onClick={onClick} className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#86efac_0%,#16a34a_50%,#86efac_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-slate-950 bg-slate-200 px-10 py-1 text-sm font-medium dark:text-white text-black backdrop-blur-3xl ">
                {title}{icon}
            </span>
        </motion.button>
    )
}

export default MagicButton