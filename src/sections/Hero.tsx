import React from 'react';
import map from '../../public/heromap.svg'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <>
      <h2
      className='m-14 p-14 font-sans font-extrabold text-white text-6xl'
      >QuickTop is Nigeria's No 1 Platform for Airtime, Data, TV subscriptions 
      <Image
      src={map}
      alt='map'
      className=""
      /></h2>
    </>
  );
};

export default Hero;