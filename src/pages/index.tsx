import React from 'react';
import * as Component from '../../sections';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function HomePage() {
  const { user, isLoading, error } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (user) {
    return (
      <>
      <Component.Nav />
      <h1>Welcome {user.nickname}!</h1>
      <Component.About />
      <Component.Airtime />
      <Component.Explore />
      <Component.Feedback />
      <Component.Hero />
      <Component.Tvsubs />
      <Component.Footer />
        <a href="/api/auth/logout">Log Out</a>
      </> 
    );
  }

  return <a href="/api/auth/login">Log In</a>;
}

