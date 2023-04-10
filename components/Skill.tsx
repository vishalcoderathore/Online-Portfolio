import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    //FIXME - Animation fix needed
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src='https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png'
        className='rounded-full border border-gray-500 object-cover h-14 w-14  xl:w-16 xl:h-16 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white rounded-full  h-14 w-14  xl:w-16 xl:h-16'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
