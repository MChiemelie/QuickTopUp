'use client';

import {motion } from 'framer-motion';
import { airtimeContainer, airtimeItem, navVariants, textVariant, textVariant2 } from "../utils/motion";
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
      className='flex justify-between bg-black'>
    <div>
    <motion.h1
      variants={textVariant(1.5)}
      className='my-8 font-sans text-sky-100 
      leading-normal tracking-wide'
      >Buy airtime</motion.h1>
      <motion.p
      variants={textVariant2}
      className="
      font-sans justify-center
      text-sky-100 text-left
      text-base"
      >Recharge all your favourite networks at very discounted prices.
      </motion.p>
    </div>
    <motion.div
      variants={airtimeContainer}
      initial='hidden'
      animate='visible'
      className='flex items-center bg-black'
      >
        <motion.div
          variants={airtimeItem}
          className='grid grid-rows-2 grid-flow-col  gap-2 rounded hover:scale-75 sm:w-24 md:32 2xl:w-40'>
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