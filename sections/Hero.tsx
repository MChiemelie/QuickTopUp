'use client'

import React from 'react';
import { motion } from "framer-motion";
import styles  from '../styles';
import {slideIn, staggerContainer, textVariant} from "../utils/motion";

const Hero: React.FC = () => {
  const stagger: any = staggerContainer;
  return (
    <header className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.header
        variants={ stagger }
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5}}
      />
      <h1
      className="
      my-4 md:my-6 mb-0 p-10 font-sans font-extrabold
      text-sky-100 text-6xl text-center 
      bg-cover bg-no-repeat bg-center"
      >Subscriptions made easy.
      </h1>

       <p
      className='
      my-4 md:my-6 mb-0 p-10 font-sans font-bold
      text-sky-100 text-lg text-center opacity-80
      bg-cover bg-no-repeat bg-center
      '>QiuckTopUp is Nigerians' leading platform for convenient and hassle-free way to purchase airtime, data, and TV subscriptions.</p>
    </header>
  );
};

export default Hero;