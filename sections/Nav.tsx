'use client';

import { motion } from "framer-motion";
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
    className='p-3'
    >
    <div className='flex justify-between' >
      <Image
      src={logo}
      alt="logo"
      className="w-20"
      />
      <Image
       src={menu} 
       alt="menu"
       className="w-15" />
      </div>
    </motion.nav>
  );
};

export default Nav;