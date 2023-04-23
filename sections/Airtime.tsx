'use client';

import {motion } from 'framer-motion';
import { airtimeContainer, airtimeItem } from "../utils/motion";
import Image from 'next/image';
import mtn from "../public/mtn.png";
import airtel from "../public/airtel.png";
import glo from "../public/glo.png";
import ninemoblie  from "../public/mobile.png";


const Airtime: React.FC = () => {
  return (
    <>
    <div
    className='flex mx-2 justify-between'>
    <div
    className='w-1/2 justify-items-start'>
    <h1
      className="
      m-1 md:m-2 px-8 font-sans md:font-bold lg:font-semibold md:text-6xlg
      text-sky-100 text-4xl text-left
      bg-cover bg-no-repeat bg-center"
      >Buy airtime</h1>
      <p
      className="
      m-1 md:m-2 px-8 font-sans md:text-6xlg
      text-sky-100 text-xl text-left
      bg-cover bg-no-repeat bg-center"
      >Recharge to all your favourite networks.</p>
    </div>
    <motion.div
      variants={airtimeContainer}
      initial='hidden'
      animate='visible'
      className='flex-auto w-1/2'
      >
        <motion.div
          variants={airtimeItem}
          className='grid grid-rows-2 grid-flow-col gap-3  rounded-full'>
           <Image src={mtn} alt='mtn'/>
           <Image src={glo} alt='glo'/>
           <Image src={airtel} alt='airtel'/>
           <Image src={ninemoblie} alt='ninemoblie'/>
        </motion.div>
    </motion.div>
    </div>
    </>
  );
};

export default Airtime;