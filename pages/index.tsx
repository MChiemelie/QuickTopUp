import React from 'react';
import * as Component from '../components';
// import { useUser } from '@auth0/nextjs-auth0/client';
 
const HomePage: React.FC = ()=> {
  return(
    <div 
      className="bg-gradient-to-r from-sky-800 to-green-800 sm:from-sky-900 sm:to-green-900 md:from-sky-1000 md:to-green-1000 lg:from-sky-1100 lg:to-green-1100 xl:from-sky-1200 xl:to-green-1200 max-w-screen overflow-x-hidden">
        <Component.Nav />
        <Component.Hero />
        <Component.Feature
          title="Buy"
          subtitle="airtime and data"
          description="Recharge all your favourite networks at very discounted prices."
          images={['mtn.jpg', 'glo.jpg', 'airtel.jpg', '9mobile.jpg']}
        />
        <Component.Feature
         title="Pay"
         subtitle="electricty bills"
         description="Recharge all your favourite networks at very discounted prices."
         images={['eedc.jpg', 'yedc.jpg', 'ibedc.jpg', 'ekedc.jpg']}
         />
        <Component.Feature
          title="Subscribe"
          subtitle=" to TV channels"
          description="Recharge all your favourite networks at very discounted prices."
          images={['dstv.jpg', 'gotv.jpg', 'supersport.jpg', 'showmax.png']}
        />
        <Component.Feature
         title="Fund"
         subtitle="betting accounts"
         description="Recharge all your favourite networks at very discounted prices."
         images={['sporty.jpg', 'betway.jpg', 'betking.jpg', 'bet9ja.jpg']}
         />
        <Component.About />
        {/* <Component.Feedback /> */}
        {/* <Component.Footer /> */}
      </div>
  )
}


// const HomePage: React.FC = () => {
//   const { user, isLoading, error } = useUser();

//   return (
//     isLoading ? (
//       <>Loading...</>
//     ) : error ? (
//       <>{error.message}</>
//     ) : user ? (
//       <div 
//       className='bg-black overflow-auto'>
//         <Component.Nav />
//         <Component.Hero />
//         <Component.Airtime />
//         <Component.About />
//         <Component.Explore />
//         <Component.Feedback />
//         <Component.Tvsubs />
//         <Component.Footer />
//         <a href="/api/auth/logout">Log Out</a>
//       </div>
//     ) : (
//       <a href="/api/auth/login">Log In</a>
//     )
//   );
// };

export default HomePage;
