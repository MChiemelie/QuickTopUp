import React from 'react';
import Image from 'next/image';
import mtn from "../public/mtn.png";
import airtel from "../public/airtel.png";
import glo from "../public/glo.png";
import ninemoblie  from "../public/ninemoblie.png";

const Airtime: React.FC = () => {
  return (
    <>
    <div
    className=''></div>
    <div
    className='w-1/2 justify-items-start'>
    <h1
      className="
      m-1 md:m-2 px-8 font-sans md:font-bold lg:font-semibold md:text-6xlg
      text-sky-100 text-4xl text-left
      bg-cover bg-no-repeat bg-center"
      >Pay for TV sub</h1>
      <p
      className="
      m-1 md:m-2 px-8 font-sans md:text-6xlg
      text-sky-100 text-xl text-left
      bg-cover bg-no-repeat bg-center"
      >Recharge to all your favourite networks.</p>
    </div>
    <div
    className='w-1/2 justify-items-end flex p-10'>
      <Image
      src={mtn}
      alt='mtnLogo'
      className='w-20 '
      />
      <Image
      src={glo}
      alt='gloLogo'
      className='w-20'
      />
      <Image
      src={airtel}
      alt='airtelLogo'
      className='w-20'
      />
      <Image
      src={ninemoblie}
      alt='9mobileLogo'
      className='w-20'
      />
    </div>
    </>
  );
};

export default Airtime;