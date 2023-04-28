import { motion } from 'framer-motion';
import { container, item, textVariant, textVariant2 } from "../utils/motion";
import Image from 'next/image';


interface Props {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

const Feature: React.FC<Props> = ({ title, subtitle, description, images }) => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: .9}}
        className='flex flex-row lg:flex-col 2xl:px-16 sm:px-0 justify-between lg:items-center m-8'
      >
        <div className='lg:space-y-3 w-4/5'>
          <motion.h1
            variants={textVariant(1)}
            className='font-sans text-sky-100 leading-normal tracking-wide text-base text-left font-semibold lg:text-5xl 2xl:text-7xl m-2'
          >
            {title}
          </motion.h1>
          <motion.h1
            variants={textVariant(1)}
            className='font-sans text-sky-100 leading-normal tracking-wide text-sm text-left font-medium lg:text-4xl 2xl:text-5xl'
          >
            {subtitle}
          </motion.h1>
          <motion.p
            variants={textVariant(1.5)}
            className='font-sans text-sky-100 leading-normal tracking-wide text-base text-left font-normal lg:text-xl 2xl:text-2xl px-4 m-2'
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView="show"
          viewport={{ once: true, amount: 1}}
          className='flex items-center'
        >
          <motion.div
            variants={item}
            initial='hidden'
            whileInView="show"
            className='grid grid-rows-2 grid-flow-col m-4 lg:gap-2 gap-3 rounded hover:scale-25 w-64'
          >
           {images.map((image, index) => (
              <Image key={index} src={require(`../public/${image}`)} alt={image} width={200} height={100} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};


export default Feature;
