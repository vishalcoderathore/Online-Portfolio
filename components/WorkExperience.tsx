import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import _ from "lodash";
import { work } from "../resources/workSources";

type Props = {};

const WorkExperience = ({}: Props) => {
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
      className='h-screen flex relative overflow-hidden flex-col text-justify md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h1 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl '>
        Experience
      </h1>
      <h3 className='absolute top-36 uppercase xs:text-xs sm:text-base xs:tracking-[2px] sm:tracking-[3px] text-gray-500 px-5'>
        Seasoned professional with expertise in full-stack web development
        across diverse industries
      </h3>

      <div className='w-full flex space-x-10 overflow-x-scroll px-10 pb-10 pt-36 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#d42d2d]/80'>
        {_.map(
          work,
          (
            {
              workId,
              organization,
              position,
              duration,
              location,
              description,
              companyLogo,
              tech,
            },
            index
          ) => {
            return (
              <ExperienceCard
                workId={workId}
                organization={organization}
                position={position}
                duration={duration}
                location={location}
                description={description}
                companyLogo={companyLogo}
                tech={tech}
                key={"experienceCard" + index}
              />
            );
          }
        )}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
