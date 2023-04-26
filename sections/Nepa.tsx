'use client';

import {motion } from 'framer-motion';
import { airtimeContainer, airtimeItem, textVariant, textVariant2 } from "../utils/motion";
import Image from 'next/image';
import mtn from "../public/mtn.jpg";
import airtel from "../public/airtel.jpg";
import glo from "../public/glo.jpg";
import _9moblie  from "../public/9mobile.jpg";


const Airtime: React.FC = () => {
  return (
    <>
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: .9}}
      className='flex flex-row lg:flex-col 2xl:px-16 sm:px-0
      justify-between lg:items-center lg:space-y-8'>
    <div
    className='lg:space-y-3 w-4/5 '>
    <motion.h1
      variants={textVariant(1)}
      className='font-sans text-sky-100 leading-normal tracking-wide 
      text-base text-left font-semibold
      lg:text-5xl 2xl:text-7xl'
      >Buy</motion.h1>
      <motion.h1
      variants={textVariant(1.5)}
      className='font-sans text-sky-100
      leading-normal tracking-wide text-base 
      text-left font-semibold
      lg:text-3xl 2xl:text-6xl px-4'
      >airtime and data</motion.h1>
      <motion.p
      variants={textVariant(2)}
      className="
      font-sans justify-center 2xl:my-8 sm:my-0
      text-sky-100 text-left
      lg:text-xl 2xl:text-2xl"
      >Recharge all your favourite networks at very discounted prices.
      </motion.p>
    </div>
    <motion.div
      variants={airtimeContainer}
      initial='hidden'
      whileInView="show"
      viewport={{ once: true, amount: .9}}
      className='flex items-center'
      >
        <motion.div
          variants={airtimeItem}
          initial='hidden'
          whileInView="show"
          className='grid grid-rows-2 grid-flow-col 
          lg:gap-2 gap-3 rounded hover:scale-75 lg:w-48 w-64'>
           <Image src={mtn} alt='mtn'/>
           <Image src={glo} alt='glo' />
           <Image src={airtel} alt='airtel'/>
           <Image src={_9moblie} alt='9moblie'/>
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default Airtime;