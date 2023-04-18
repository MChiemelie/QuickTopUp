'use client'

import React from 'react';
import { motion } from "framer-motion";
import styles  from '../styles';
import {slideIn, staggerContainer, textVariant} from "../utils/motion";

const Hero: React.FC = () => {
  const stagger: any = staggerContainer;
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={ stagger }
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
      />
      <h2
      className="
      my-4 md:my-6 mb-0 p-10 font-sans font-bold
      text-sky-100 text-6xl text-center 
      bg-[url('../../public/map.png')]  
      bg-cover bg-no-repeat bg-center"
      >QuickTopUp, subscriptions must be easy.
       <p
      className='
      m-1 md:m-2 p-8 font-sans md:font-thin lg:font-semibold md:text-6xlg
      text-white-400 text-base text-center opacity-80
      bg-cover bg-no-repeat bg-center
      '> Nigerians' leading platform for convenient and hassle-free way to purchase airtime, data, and TV subscriptions.</p>
      </h2>
    </section>
  );
};

export default Hero;