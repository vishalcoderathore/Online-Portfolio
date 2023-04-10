import React from "react";
import { motion } from "framer-motion";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='h-screen relative flex flex-col md:flex-row text-left overflow-hidden max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h1 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl '>
        Projects
      </h1>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-32 h-screen'>
            <motion.img
             initial={{
              y: -100,
              opacity: 0
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1,
            }}
            viewport={{once:true}}
              src='http://clipart-library.com/images_k/laptop-transparent-png/laptop-transparent-png-10.jpg'
              alt=''
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-xl font-medium text-center'>
                <span className='underline decoration-[#d42d2d]/50'>
                  Project Sample {i + 1} of {projects.length}
                </span>
                : Demo Project
              </h4>
              <p className='text-sm md:text-base text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                sed illum quas voluptas id impedit aperiam praesentium quam
                saepe inventore, eius molestias odio est molestiae optio dolore
                odit maiores corrupti.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#d42d2d]/20 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}

export default Projects;
