'use client';

import {motion } from 'framer-motion';
import { airtimeContainer, airtimeItem, textVariant } from "../utils/motion";
import Image from 'next/image';
import mtn from "../public/mtn.jpg";
import airtel from "../public/airtel.jpg";
import glo from "../public/glo.jpg";
import _9moblie  from "../public/9mobile.jpg";


const Airtime: React.FC = () => {
  return (
    <>
    <div
    className='flex px-4 gap-4 mx-4 justify-around'>
    <div
    className='justify-items-start'>
    <motion.h1
      variants={textVariant(2.5)}
      className='my-8 font-sans font-bold text-sky-100 text-4xl 
                          leading-normal tracking-wide'
      >Buy airtime</motion.h1>
      <motion.p
      className="
      my-4 font-sans
      text-sky-100 text-xl text-left"
      >Recharge all your favourite networks at very discounted prices.
      </motion.p>
    </div>
    <motion.div
      variants={airtimeContainer}
      initial='hidden'
      animate='visible'
      className='flex place-items-center'
      >
        <motion.div
          variants={airtimeItem}
          className='grid grid-rows-2 grid-flow-col justify-around gap-1 w-48'>
           <Image src={mtn} alt='mtn' className='rounded'/>
           <Image src={glo} alt='glo' className='rounded'/>
           <Image src={airtel} alt='airtel'className='rounded'/>
           <Image src={_9moblie} alt='9moblie' className='rounded'/>
        </motion.div>
    </motion.div>
    </div>
    </>
  );
};

export default Airtime;