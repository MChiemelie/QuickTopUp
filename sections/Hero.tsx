'use client'

import React from 'react';
import { motion } from "framer-motion";
import styles  from '../styles/index';
import {staggerContainer, textVariant, slideIn} from "../utils/motion";

const Hero: React.FC = () => {
  const stagger: any = staggerContainer;
  const slide: any = slideIn;
  return (
    <>
      <motion.div
        variants={ stagger }
        className='m-1'
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
      >
        <div
        className='flex justify-center items-center flex-col z- text-sky-100
                            md:m-6 2xl:my-16'>
          <motion.h1
          variants={textVariant(1.1)}
          className='my-14 font-sans text-6xl
                              text-center leading-relaxed tracking-wide
                              md:text-6xl
                              2xl:mx-auto 2xl:font-extrabold 2xl:text-7xl'
          viewport={{ once: false, amount: 0.25}}
          >Safe, Secure, Seamless.
          </motion.h1>
          <motion.p
          variants={textVariant(2.5)}
          className='mx-6 font-sans font-slimbold
                            text-center leading-7 tracking-wide
                            md:mx-6 md:text-md
                            2xl:mx-48 2xl:text-md 2xl:text-xl'
          >We understand the importance of staying connected, and we strive to offer you the best service possible, whether you need to top up your airtime, data, or TV subscriptions. With QuickTopUp, you can enjoy seamless and efficient recharge options that are tailored to your specific needs.
          </motion.p>
          <div
          className='flex justify-center'
          >
          <motion.button
          variants={slide('left')}
          className='m-2 p-4 bg-teal-950 sm:mx-4 md:m-6 lg:mx-8 2xl:mx-6 2xl:my-8 2xl:w-40 sm:w-32 sm:p-2 rounded-sm'> Get Started </motion.button>
          <motion.button
          variants={slide('right')}
          className='m-2 p-4 bg-teal-950 sm:mx-4 md:m-6 lg:mx-8 2xl:mx-6 2xl:my-8 2xl:w-40 sm:w-32 rounded-sm'> Contact Us </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;