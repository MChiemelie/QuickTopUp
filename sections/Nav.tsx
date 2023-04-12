'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { navVariants } from "../utils/motion";

const Nav: React.FC = () => {
  return (
    <motion.nav
    variants={ navVariants }
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
    >
      navbar 
     <img src="../images/logo.png" alt="" /> 
    </motion.nav>
  );
};

export default Nav;

// 
    // }
    //> 
   // {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
   // {/* <div className={`${styles.innerWidth} max-auto flex justify-between gap-8`}> */}
    //  {/**/}
   // {/* </div> */}