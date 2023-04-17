import React from "react";
import { motion } from "framer-motion";
import _ from "lodash";

interface ChildProps {
  workId: string;
  organization: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  companyLogo: string;
  tech: string[];
}

function ExperienceCard(props: ChildProps) {
  return (
    <article
      className='flex 
      flex-col 
      rounded-lg 
      items-center 
      space-y-0 
      flex-shrink-0 
      xs:w-[300px]
      sm:w-[600px] 
      md:w-[600px] 
      xl:w-[900px] 
      snap-center
      bg-[#292929] 
      p-10 
      sm:hover:opacity-100 
    sm:opacity-40 
    hover:scale-105 
    ease-in-out 
    duration-300 
    cursor-pointer 
    transition-opacity 
    overflow-x-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className='w-32 h-32 xl:w-[200px] xl:h-[200px] object-scale-down object-center'
        src={props.companyLogo}
        alt=''
      />

      <div className='xs:px-1 sm:px-10'>
        <h4 className='text-xl lg:text-2xl font-semibold text-gray-500 mt-1'>
          {props.position}
        </h4>
        <p className='font-bold my-1'>{props.organization}</p>
        <div className='flex space-x-2 my-2'>
          {/* Tech Used */}
          {_.map(props.tech, (item, index) => {
            return (
              <img
                className='h-10 w-10 rounded-full'
                src={item}
                alt=''
                key={"experienceCardTechImage" + index}
              />
            );
          })}
        </div>
        <p className='text-base text-gray-500'>{props.duration}</p>

        <p className='text-xs sm:text-base text-left mt-1'>
          {props.description}
        </p>
      </div>
    </article>
  );
}

export default ExperienceCard;
