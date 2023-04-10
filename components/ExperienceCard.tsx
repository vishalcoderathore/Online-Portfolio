import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className='flex 
      flex-col 
      rounded-lg 
      items-center 
      space-y-7 
      flex-shrink-0 
      sm:w-[500px] 
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
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='/images/multitech.png'
        alt=''
      />

      <div className='px-0 sm:px-10'>
        <h4 className='text-1xl lg:text-2xl font-semibold text-gray-500 mt-1'>
          Software Engineer, Cloud Platform
        </h4>
        <p className='font-bold my-1'>Multi-Tech Systems, Inc.</p>
        <div className='flex space-x-2 my-2'>
          {/* Tech Used */}
          <img
            className='h-10 w-10 rounded-full'
            src='https://www.osano.com/hs-fs/hubfs/logos/vuejs.png?width=199&height=199&name=vuejs.png'
            alt=''
          />
          {/* Tech Used */}
          <img
            className='h-10 w-10 rounded-full'
            src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112012/rails.png?itok=UeYwdITD'
            alt=''
          />
          {/* Tech Used */}
          <img
            className='h-10 w-10 rounded-full'
            src='https://devoncroft.com/wp-content/uploads/2021/01/AWS-Logo-e1610483403406.png'
            alt=''
          />
          {/* Tech Used */}

          <img
            className='h-10 w-10 rounded-full'
            src='https://g2si.fr/forma_ico/linux.png'
            alt=''
          />
        </div>
        <p>July 2019 - Present</p>
        <ul className='list-disc space-y-4 ml-5 text-sm md:text-base text-justify'>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
