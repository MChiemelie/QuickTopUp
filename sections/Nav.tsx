'use client';

import { motion } from "framer-motion";
import styles from '../styles'
import { navVariants } from "../utils/motion";
import Image from 'next/image';
import logo from '../public/logo.png';
import menu  from "../public/menu.svg";

const Nav: React.FC = () => {
  return (
    <motion.nav
    variants={ navVariants }
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} p-4 relative`}
    >
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`} >
      <Image
      src={logo}
      alt="Logo"
      width={100}
      />
      <Image
       src={menu} 
       alt="menu"
       width={25} />
      </div>
    </motion.nav>
  );
};

export default Nav;
