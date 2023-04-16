'use client';

import { motion } from "framer-motion";
import styles from '../styles'
import { navVariants } from "../utils/motion";
import Image from 'next/image'
import logo from '../../public/logo.png'

const Nav: React.FC = () => {
  return (
    <motion.nav
    variants={ navVariants }
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
    >
    <div className="absolute w-[100%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`} >
      <Image
      src={logo}
      alt="Logo" 
      width={50} 
      height={50}
      />
      </div>
    </motion.nav>
  );
};

export default Nav;
