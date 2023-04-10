import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
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
      className='flex relative h-screen text-center md:text-left max-w-7xl px-5 justify-evenly mx-auto items-center'>
      <h1 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl '>
        About
      </h1>

      <div className='flex flex-col md:flex-row items-center'>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          src='/images/woods-full.jpg'
          alt=''
          className=' md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg  xs:w-28 xs:h-28 md:w-64 md:h-96 xs:mb-2'
        />
        <div className='space-y-5 px-0 md:px-10'>
          <h4 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-500'>
            Here's a{" "}
            <span className='underline decoration-[#d42d2d]/50'>little</span>{" "}
            background
          </h4>
          <p className='text-sm md:text-base text-justify'>
            Greetings and welcome to my lair! I am Vishal Singh Rathore, a
            skilled software engineer with over six years of expertise in
            crafting cutting-edge web applications. I specialize in a variety of
            front-end technologies, including powerful Javascript frameworks, as
            well as highly-efficient back-end object-oriented technologies like
            Ruby on Rails.
          </p>
          <p className='text-sm md:text-base text-justify'>
            I possess advanced technical skills and hands-on experience in
            server maintenance, including log rotation, security patch
            implementation, system software upgrades, server configuration,
            database optimization, and API response enhancement. I hold an AWS
            Solution Architect Associate certification, indicating my
            proficiency in cloud technologies, and my passion is building
            high-performing web applications that provide value to users. I stay
            up-to-date with the latest industry trends and continuously seek new
            technologies and methodologies to improve my skills.
          </p>
          <p className='text-sm md:text-base text-justify'>
            If you're searching for a developer with a solid technical
            background and a <i>"will-do"</i> attitude, don't hesitate to reach
            out to me. Thank you for visiting my website, and I hope to work
            with you soon.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
