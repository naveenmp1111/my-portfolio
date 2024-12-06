"use client"
import { cn } from "@/lib/utils";
import { FaReact, FaNodeJs } from 'react-icons/fa'; // React and Node.js icons
import { IoMdCheckmark } from 'react-icons/io'; // React and Node.js icons
import { SiMongodb, SiTailwindcss } from 'react-icons/si'; // MongoDB and other icons
import { BackgroundGradientAnimation } from "./Background-gradient-animation";
import MagicButton from "./MagicButton";
import { useState } from "react";
import { IoMdCopy } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from 'react-lottie'
import animationData from '../../data/confetti.json'
import { AiOutlineDownload } from "react-icons/ai";
import { AuroraBackground } from "./Aurora-background";


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
        "grid md:grid-rows-10 lg:grid-cols-7 lg:grid-rows-8 grid-cols-1 sm:grid-rows-8 grid-rows-7 md:grid-cols-6 gap-4 max-w-7xl mx-auto mb-10 sm:px-10",
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
  const [copied, setCopy] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const handleClick = () => {
    navigator.clipboard.writeText('naveenapk048@gmail.com')
    setCopy(true)
  }
  const handleDownloadCV = () => {
    if (!downloaded) {
      const link = document.createElement('a');
      link.href = '/resume.pdf'; // Path to your resume file
      link.download = 'Naveen_resume.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setDownloaded(true)
    }
  };
  const icons = [<SiMongodb key="mongodb" className="w-12 h-12" />, <FaReact key="react" className="w-12 h-12" />, <FaNodeJs key="node" className="w-12 h-12" />, <SiTailwindcss key="tailwind" className="w-12 h-12" />]
  return (
    <div
      className={cn(
        `row-span-1 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none sm:p-4 p-2 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col sm:space-y-4 overflow-hidden`,
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

      {id == 2 && (
        <>
          <h1>TechStack</h1>
          <div className="w-full h-full flex flex-col ">
            <div className="flex flex-wrap items-center gap-1 py-2">
              {icons.map((icon, idx) => (
                <span key={idx}>{icon}</span>
              ))}
              {icons.map((icon, idx) => (
                <span key={idx}>{icon}</span>
              ))}
              {icons.map((icon, idx) => (
                <span key={idx}>{icon}</span>
              ))}
              {icons.map((icon, idx) => (
                <span key={idx}>{icon}</span>
              ))}

            </div>
          </div>
        </>
      )}

      {
        id == 4 &&
        <AuroraBackground>
          <div className="absolute ">
            <Lottie
              key={copied ? 'copied-true' : 'copied-false'} // Ensure re-render when `copied` changes
              options={{
                loop: false, // Only loop when copied is true
                autoplay: copied, // Autoplay only when copied is true
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidyMid slice',
                },
              }}
            />

          </div>

          <MagicButton
            title={copied ? 'Email Copied!' : 'Copy Email'}
            icon={copied ? <IoMdCheckmark className="ml-2 text-2xl" /> : <IoMdCopy className="ml-2 text-2xl" />}
            onClick={handleClick}
          />
        </AuroraBackground>
      }

      {
        id == 6 &&
        <BackgroundGradientAnimation>
          <div className="absolute ">
            <Lottie
             key={downloaded ? 'copied-true' : 'copied-false'} 
             options={{
              loop: false,
              autoplay: downloaded,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidyMid slice'
              }
            }} />
          </div>
          <MagicButton title={downloaded ? 'Downloaded   ' : 'Download Resume'} icon={downloaded ? <IoMdCheckmark className="ml-2 text-2xl" /> : <AiOutlineDownload className="mx-1 text-xl" />} onClick={handleDownloadCV} />

        </BackgroundGradientAnimation>
      }
    </div>
  );
};
