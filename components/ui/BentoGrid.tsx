"use client"
import { cn } from "@/lib/utils";
import { SiMongodb, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiFirebase, SiRedux, SiMysql, SiBootstrap, SiNginx, SiC, SiCplusplus, SiExpress, SiVercel } from "react-icons/si";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { BackgroundGradientAnimation } from "./Background-gradient-animation";
import MagicButton from "./MagicButton";
import { useState } from "react";
import { IoMdCheckmark, IoMdCopy } from "react-icons/io";
import { motion } from "framer-motion";
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
        "grid md:grid-rows-10 lg:grid-cols-7 lg:grid-rows-8 grid-cols-1 sm:grid-rows-7 grid-rows-10 md:grid-cols-6 gap-4 max-w-7xl mx-auto mb-10 sm:px-10 lg:px-24 md:px-16 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  // title,
  // description,
  // header,
  // icon,
  id,
  image,
  // index
}: {
  className?: string;
  // title?: string | React.ReactNode;
  // description?: string | React.ReactNode;
  // header?: React.ReactNode;
  // icon?: React.ReactNode;
  id?: number,
  image?: string,
  // index: number
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

  const icons = [
    { icon: <SiMongodb className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-green-600" />, name: "MongoDB" },
    { icon: <FaReact className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-blue-500" />, name: "React" },
    { icon: <FaNodeJs className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-green-700" />, name: "Node.js" },
    { icon: <SiExpress className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-gray-500" />, name: "Express" },
    { icon: <SiRedux className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-violet-700" />, name: "Redux" },
    { icon: <SiJavascript className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-yellow-500" />, name: "JavaScript" },
    { icon: <SiTypescript className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-blue-700" />, name: "TypeScript" },
    { icon: <SiHtml5 className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-orange-600" />, name: "HTML" },
    { icon: <SiCss3 className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-blue-600" />, name: "CSS" },
    { icon: <SiTailwindcss className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-teal-500" />, name: "Tailwind CSS" },
    { icon: <SiFirebase className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-yellow-400" />, name: "Firebase" },
    { icon: <FaAws className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-orange-500" />, name: "AWS" },
    { icon: <SiMysql className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-blue-500" />, name: "MySQL" },
    { icon: <SiBootstrap className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-violet-700" />, name: "Bootstrap" },
    { icon: <SiNginx className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-green-500" />, name: "NGINX" },
    { icon: <SiC className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-blue-600" />, name: "C" },
    { icon: <SiCplusplus className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-blue-500" />, name: "C++" },
    { icon: <SiVercel className="lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-6 sm:h-6 h-6 w-6 text-white" />, name: "Vercel" }
  ];

  return (
    <motion.div
    initial={{ scale: 0.93,opacity:0 }}
    whileInView={{ scale: 1 ,opacity:1}}
    viewport={{ once: true }}
    transition={{
      duration: 1.5,
      ease: [0.34, 1.56, 0.64, 1], // Custom bezier curve for smooth, slightly bouncy animation
    }}
      className={cn(
        `row-span-1 relative rounded-xl group/bento hover:shadow-lg transition-all duration-300 shadow-lg dark:shadow-none sm:p-4 p-2 dark:bg-black dark:border-white/[0.2] bg-white border border-none justify-between flex flex-col sm:space-y-4 overflow-hidden`,
        image ? 'bg-cover bg-center' : '',
        className
      )}
      style={{
        backgroundImage: image && `url(${image})`,
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
          <h1 className="text-2xl font-bold mb-1">TechStack</h1>
          <div className="w-full h-full flex flex-col">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 gap-4 py-2">
              {icons.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center space-y-2 text-center"
                >
                  <span className="text-4xl">{item.icon}</span>
                  <span className="lg:text-xs lg:font-normal md:font-extralight sm:text-xs font-extralight text-[10px]">{item.name}</span>
                </div>
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
    </motion.div>
  );
};
