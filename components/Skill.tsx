import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  skillName?: string;
  skillLogo?: string;
  skillLevel?: number;
};

function Skill({ directionLeft, skillName, skillLogo, skillLevel }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={skillLogo}
        className='rounded-full  object-cover h-14 w-14  xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white rounded-full  h-14 w-14  xl:w-20 xl:h-20'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-xl font-bold text-black opacity-100'>
            {skillLevel}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
