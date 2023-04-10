import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "The name is Rathore",
      "Vishal Rathore",
      "Guy who loves to code",
      "<ButLovesCoffeeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-5 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full mx-auto object-cover object-center h-56 w-56'
        src='/images/landing_image.jpg'
        alt=''
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-2xl lg:text-4xl font-semibold px-10'>
          <span className='mr-3 md:text-2xl'>{text}</span>
          <Cursor cursorBlinking cursorColor='#d42d2d'></Cursor>
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
