import React from 'react';
import * as Component from '../sections';
// import { useUser } from '@auth0/nextjs-auth0/client';
 
const HomePage: React.FC = ()=> {
  return(
    <div 
      className='bg-gradient-to-r from-sky-800  from-cyan-900 to-green-800'>
        <Component.Nav />
        <Component.Hero />
        <Component.Airtime />
        <Component.About />
        <Component.Explore />
        <Component.Feedback />
        <Component.Tvsubs />
        <Component.Footer />
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
