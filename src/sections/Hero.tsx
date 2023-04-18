import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <h2
      className="
      my-4 md:my-6 mb-0 p-10 font-sans md:font-bold lg:font-extrabold md:text-6xlg
      text-sky-100 text-7xl text-center 
      bg-[url('../../public/map.png')]  
      bg-cover bg-no-repeat bg-center"
      >QuickTopUp is Nigerians' No 1 Platform for Airtime, Data, TV subscriptions.
       <p
      className='
      m-1 md:m-2 p-8 font-sans md:font-thin lg:font-semibold md:text-6xlg
      text-sky-100 text-base text-center opacity-80
      bg-cover bg-no-repeat bg-center
      '>a leading platform in Nigeria that offers a convenient and hassle-free way to purchase airtime, data, and TV subscriptions.</p>
      </h2>
    </>
  );
};

export default Hero;