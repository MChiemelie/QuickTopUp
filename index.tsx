import React from 'react';
import * as Component from './src/sections';
import { useUser } from '@auth0/nextjs-auth0/client';

const HomePage: React.FC = () => {
  const { user, isLoading, error } = useUser();

  return (
    isLoading ? (
      <>Loading...</>
    ) : error ? (
      <>{error.message}</>
    ) : user ? (
      <>
        <Component.Nav />
        <Component.About />
        <Component.Airtime />
        <Component.Explore />
        <Component.Feedback />
        <Component.Hero />
        <Component.Tvsubs />
        <Component.Footer />
        <a href="/api/auth/logout">Log Out</a>
      </>
    ) : (
      <a href="/api/auth/login">Log In</a>
    )
  );
};

export default HomePage;
