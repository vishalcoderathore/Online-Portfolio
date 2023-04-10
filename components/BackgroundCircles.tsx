import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [2,1.9,1.8,1.7,1.6,1.5,1.4,1.3,1.2,1.1,1.0,0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center'>
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='absolute border border-[#333333] opacity-40 rounded-full h-[300px] w-[300px] mt-52' />
      <div className='absolute border border-[#333333] opacity-60 rounded-full h-[500px] w-[500px] mt-52 animate-ping' />
      <div className='absolute border border-[#A63D40] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse' />
      <div className='absolute border border-[#333333] opacity-40 rounded-full h-[800px] w-[800px] mt-52 animate-ping' />
    </motion.div>
  );
}

export default BackgroundCircles;
