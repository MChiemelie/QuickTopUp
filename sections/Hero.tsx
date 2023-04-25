'use client'

import React from 'react';
import { motion } from "framer-motion";
import styles  from '../styles/index';
import {staggerContainer, textVariant} from "../utils/motion";

const Hero: React.FC = () => {
  const stagger: any = staggerContainer;
  return (
    <header>
      <motion.div
        variants={ stagger }
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
      >
        <div
        className='flex justify-center items-center flex-col relative z-10
                            md:m-6 2xl:my-24'>
          <motion.h1
          variants={textVariant(1.1)}
          className='my-14 font-sans text-sky-100 text-6xl
                              text-center leading-relaxed tracking-wide
                              md:text-6xl
                              2xl:mx-auto 2xl:font-extrabold 2xl:text-7xl'
          viewport={{ once: false, amount: 0.25}}
          >Safe, Secure, Seamless.
          </motion.h1>
          <motion.p
          variants={textVariant(2.5)}
          className='mx-6 font-sans font-slimbold text-sky-100 
                            text-center opacity-0 leading-7 tracking-wide
                            md:mx-6 md:text-md
                            2xl:mx-48 2xl:text-md 2xl:text-xl'
          >We understand the importance of staying connected, and we strive to offer you the best service possible, whether you need to top up your airtime, data, or TV subscriptions. With QuickTopUp, you can enjoy seamless and efficient recharge options that are tailored to your specific needs.
          </motion.p>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;