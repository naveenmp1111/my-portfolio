"use client"
import { cn } from "@/lib/utils";
import { FaReact, FaNodeJs } from 'react-icons/fa'; // React and Node.js icons
import { SiMongodb, SiTailwindcss } from 'react-icons/si'; // MongoDB and other icons
import { BackgroundGradientAnimation } from "./Background-gradient-animation";
import MagicButton from "./MagicButton";
import { useState } from "react";
import { IoMdCopy } from "react-icons/io";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:grid-rows-5 grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto mb-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  image
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number,
  image?: string
}) => {
  const [copied,setCopy]=useState(false)
  const handleClick=()=>{
    navigator.clipboard.writeText('naveenapk048@gmail.com')
    setCopy(true)
  }
  const icons=[<SiMongodb key="mongodb" className="w-12 h-12"/>, <FaReact key="react" className="w-12 h-12"/>, <FaNodeJs key="node" className="w-12 h-12"/>, <SiTailwindcss key="tailwind" className="w-12 h-12"/>]
  return (
    <div
      className={cn(
        `row-span-1 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 overflow-hidden`,
        image ? 'bg-cover bg-center' : '',
        className
      )}
      style={{
        backgroundImage: image && `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${image})`,
          // : `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 ">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {id!=1 && title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>

      </div> */}
      
      {id==2 && (
        <>
        <h1>TechStack</h1>
        <div className="w-full h-full flex flex-col ">
        <div className="flex flex-wrap items-center gap-1">
        {icons.map((icon) => (
            <span>{icon}</span>
          ))}
        {icons.map((icon) => (
            <span>{icon}</span>
          ))}
        {icons.map((icon) => (
            <span>{icon}</span>
          ))}
        {icons.map((icon) => (
            <span>{icon}</span>
          ))}
        </div>
      </div>
      </>
      )}

      {
        id==4 &&
        <BackgroundGradientAnimation>
           <div>
                <MagicButton title={`${copied?'Email Copied! ' : "Copy Email "}`} icon={<IoMdCopy className="mx-1 text-lg"/>} onClick={handleClick}/>
           </div>
        </BackgroundGradientAnimation>
      }
    </div>
  );
};
