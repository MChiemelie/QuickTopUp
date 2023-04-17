import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <h2
      className="
      my-4 md:my-6 mb-0 p-10 font-sans text-base md:font-bold lg:font-extrabold md:text-6xlg
      text-sky-100 text-7xl text-center 
      bg-[url('../../public/map.png')]  
      bg-cover bg-no-repeat bg-center"
      >QuickTop is Nigeria's No 1 Platform for Airtime, Data, TV subscriptions.
      </h2>
      <p
      className='
      m-4 md:m-8 p-10 font-sans text-base md:font-slim lg:font-semibold md:text-6xlg
      text-sky-100 text-xl text-center 
      bg-cover bg-no-repeat bg-center
      '>a leading platform in Nigeria that offers a convenient and hassle-free way to purchase airtime, data, and TV subscriptions.</p>
    </>
  );
};

export default Hero;