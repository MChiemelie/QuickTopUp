'use client';

import { motion } from "framer-motion";
import styles from '../../../styles';
import { navVariants } from "../../../utils/motion";
import Image from 'next/image'

const Nav: React.FC = () => {
  return (
    <motion.nav
    variants={ navVariants }
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
    >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} max-auto flex justify-between gap-8`} />
    <div className="flex items-center flex-shrink-0 text-black mr-6" />
      <Image src="/logo.png" alt="Logo" width={48} height={48} />
    </motion.nav>
  );
};

export default Nav;
