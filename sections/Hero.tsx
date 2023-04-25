'use client'

import React from 'react';
import { motion } from "framer-motion";
import styles  from '../styles/index';
import {staggerContainer, textVariant} from "../utils/motion";

const Hero: React.FC = () => {
  const stagger: any = staggerContainer;
  return (
    <header className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={ stagger }
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        className={`${styles.innerWidth} flex`}
      >
        <div
        className='flex justify-center items-center flex-col relative z-10
                            md:m-12'>
          <motion.h1
          variants={textVariant(1.1)}
          className='my-14 font-sans font-extrabold text-sky-100 text-6xl
                              text-center leading-relaxed tracking-wide
                              md:text-7xl md:leading-normal'
          viewport={{ once: false, amount: 0.25}}
          >Safe, Secure, Seamless.
          </motion.h1>
          <motion.p
          variants={textVariant(2.5)}
          className='mx-6 font-sans font-slimbold text-sky-100 
                            text-center opacity-0 leading-7 tracking-widest
                            md:mx-36 md:text-xl '
          >We understand the importance of staying connected, and we strive to offer you the best service possible, whether you need to top up your airtime, data, or TV subscriptions. With QuickTopUp, you can enjoy seamless and efficient recharge options that are tailored to your specific needs.
          </motion.p>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;