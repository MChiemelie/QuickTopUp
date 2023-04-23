'use client'

import React from 'react';
import { motion } from "framer-motion";
import styles  from '../styles';
import {slideIn, staggerContainer, textVariant} from "../utils/motion";

const Hero: React.FC = () => {
  const stagger: any = staggerContainer;
  return (
    <header className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={ stagger }
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx auto flex flex-col`}
      >
        <div
        className='flex justify-center items-center flex-col relative z-10'>
          <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
          viewport={{ once: false, amount: 0.25}}
          >Subscriptions made easy.
          </motion.h1>
          <motion.p
          variants={textVariant(2.5)}
          className={styles.heroParagraph}
          >QuickTopUp is Nigerians' leading platform for convenient and hassle-free way to purchase airtime, data, and TV subscriptions.
          </motion.p>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;