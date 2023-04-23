'use client';

import {motion } from 'framer-motion';
import { airtimeContainer, airtimeItem } from "../utils/motion";
import Image from 'next/image';
import mtn from "../public/mtn.jpg";
import airtel from "../public/airtel.jpg";
import glo from "../public/glo.jpg";
import _9moblie  from "../public/9mobile.jpg";


const Airtime: React.FC = () => {
  return (
    <>
    <div
    className='flex mx-16 justify-between'>
    <div
    className='w-1/3 justify-items-start'>
    <div className="gradient-02 z-1" />  
    <h1
      className="
      my-12 px-8 font-sans font-semibold
      text-sky-100 text-6xl text-left
      bg-cover bg-no-repeat bg-center"
      >Buy airtime</h1>
      <p
      className="
      my-4 px-8 font-sans
      text-sky-100 text-xl text-left
      bg-cover bg-no-repeat bg-center"
      >Recharge all your favourite networks at very discounted prices.</p>
    </div>
    <motion.div
      variants={airtimeContainer}
      initial='hidden'
      animate='visible'
      className=''
      >
        <motion.div
          variants={airtimeItem}
          className='grid grid-rows-2 grid-flow-col justify-around
          w-2/3 h-96 gap-3 mx-20'>
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