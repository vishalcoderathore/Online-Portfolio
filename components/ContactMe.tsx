import React from "react";
import { EnvelopeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {};

function ContactMe({}: Props) {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'>
      <h1 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl '>
        Contact
      </h1>

      <div className='flex flex-col space-y-10 text-center w-full'>
        <h3 className='uppercase xs:tracking-[2px] sm:tracking-[3px] text-gray-500'>
          Looking for what you need? Reach out to me via email or drop a message
          here - I've got you covered!
          <br />
          <br />
          <span className='decoration-[#d42d2d]/50 underline text-lg font-semibold pt-5'>
            Let's get down to business.
          </span>
        </h3>

        <div className='flex flex-col mx-auto space-y-3'>
          <div className='flex items-center space-x-5 justify-center max-w-full'>
            <EnvelopeIcon className='text-[#d42d2d] h-7 w-7 animate-pulse' />{" "}
            <p className='text-lg md:text-xl'>rathorevsr@tutanota.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center max-w-full'>
            <ArrowDownTrayIcon className='text-[#d42d2d] h-7 w-7 animate-pulse' />{" "}
            <Link href="https://drive.google.com/open?id=141L7p5IA_XlFnID_B-MBaXJV4C9o1ob_" target='_blank'
            className='py-1 px-10 rounded-md text-white font text-lg md:text-xl border border-[#d42d2d]/50 hover:bg-[#d42d2d]/90 focus:outline-none'
          >Download Resume</Link>
          </div>
        </div>

        <form className='flex flex-col space-y-2 mx-auto lg:mx-60'>
          <div className='flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
            <input
              type='text'
              placeholder='Name'
              className='contactInput w-full'
            />
            <input
              type='email'
              placeholder='Email'
              className='contactInput w-full'
            />
          </div>
          <input type='text' placeholder='Subject' className='contactInput' />
          <textarea
            name='Hi'
            id='swdsd'
            className='contactInput'
            placeholder='Message'
          ></textarea>

          <button
            type='submit'
            className='bg-[#d42d2d]/90 py-5 px-10 rounded-md text-white font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
