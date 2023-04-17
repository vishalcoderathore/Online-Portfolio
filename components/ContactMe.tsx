import React from "react";
import { EnvelopeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LPAWS from "../aws/awsEmail";

type Props = {};

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    LPAWS.sendToTopic(
      formData.name,
      formData.message,
      formData.name,
      formData.subject
    );
    toast.success("Thanks for contacting me.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    reset();
  };

  const handleErrors = function (errors: Record<string, { message: string }>) {
    if (errors) {
      for (const key in errors) {
        const item = errors[key];
        toast.error(item.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-8 justify-center mx-auto items-center space-y-20'>
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
            <Link
              href='https://drive.google.com/open?id=141L7p5IA_XlFnID_B-MBaXJV4C9o1ob_'
              target='_blank'
              className='py-1 px-10 rounded-md text-white font text-lg md:text-xl border border-[#d42d2d]/50 hover:bg-[#d42d2d]/90 focus:outline-none'>
              Download Resume
            </Link>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 mx-auto lg:mx-60'>
          <div className='flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
            <div className='flex flex-col space-y-1 w-full'>
              <input
                {...register("name", { required: true })}
                type='text'
                id='name'
                placeholder='Name'
                className='contactInput w-full'
              />
            </div>

            <div className='flex flex-col w-full'>
              <input
                {...register("email", { required: true })}
                type='email'
                placeholder='Email'
                className='contactInput w-full'
              />
            </div>
          </div>
          <input
            {...register("subject", { required: true })}
            type='text'
            placeholder='Subject'
            className='contactInput'
          />
          <textarea
            {...register("message", { required: true })}
            className='contactInput'
            placeholder='Message'></textarea>

          <button
            type='submit'
            onClick={() => handleErrors(errors)}
            className='bg-[#d42d2d]/90 py-5 px-10 rounded-md text-white font-bold text-lg'>
            Submit
          </button>
          <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
          />
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
