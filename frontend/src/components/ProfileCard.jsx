import React from 'react';
import { motion } from 'framer-motion';
import { LuClock } from "react-icons/lu";
import { RiCalendarCheckLine } from "react-icons/ri";
import logo from '/src/assets/fh-favicon.jpg';

const ProfileCard = () => {
  return (
    <section className='flex flex-col justify-center w-80  rounded-lg py-4 border-blue-300 border-4'>
      <div className='flex items-center gap-3 ml-10'>
        <div>
          <img className='h-16' src={logo} alt="logo" />
        </div>
        <div className='flex flex-col gap-1'>
          <h1 className='font-semibold ml-1 text-xl'>Amit Mishra</h1>
          <div className='flex gap-2'>
            <span className='border px-1 rounded-full bg-blue-500 text-white font-semibold'>Developer</span>
            <span className='border px-1 rounded-full text-white bg-orange-400 font-semibold'>Marketer</span>
          </div>
        </div>
      </div>

      <div className='flex gap-2 ml-12 mt-5 mb-3'>
        <span className='px-2 rounded-full bg-gray-200 text-sm'>Frontend</span>
        <span className='px-2 rounded-full bg-gray-200 text-sm'>Backend</span>
        <span className='px-2 rounded-full bg-gray-200 text-sm'>APis</span>
      </div>

      <div className='mb-2 ml-3 text-gray-700'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ratione odio autem? Quidem quod autem vero</p>
      </div>

      <div className='flex gap-2 mb-2 ml-3'>
        <span className='text-gray-500'>Avilability</span>
        <div className='flex gap-2 items-center'>
          <span><LuClock /></span>
          <span className='text-sm'>Part-Time</span>
        </div>
      </div>

      <div className='ml-2'>
        <p className='text-gray-500'>My vision</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium temporibus nam nesciunt cum at nemo perspiciatis iure, dolores</p>
      </div>
    </section>
  );
};
 export default ProfileCard