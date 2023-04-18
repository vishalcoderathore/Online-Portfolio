import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import AwsCertificationBadge from "./CertificationBadge";
import { rearrangedTechnicalSkills } from "../resources/skillSources";
import _ from "lodash";

function Skills() {
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
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h1 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl '>
        Skills
      </h1>
      <h3 className='absolute top-36 uppercase xs:tracking-[2px] sm:tracking-[3px] text-gray-500 px-5'>
        Curious about my skill level? Just hover over the skill to find out!
      </h3>

      <div className='grid grid-cols-4 gap-10'>
        {_.map(rearrangedTechnicalSkills, (value, key) => {
          return (
            <Skill
              skillLogo={value.skillLogo}
              skillName={value.skill}
              skillLevel={value.skillLevel}
              key={"logo_" + key}
            />
          );
        })}
        {/* <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill /> */}
        {/* <AwsCertificationBadge/> */}
      </div>
    </motion.div>
  );
}

export default Skills;
