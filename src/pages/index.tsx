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
        <h1>Welcome {user.nickname}!</h1>
        <a href="/api/auth/logout">Log Out</a>
      </> 
    );
  }

  return <a href="/api/auth/login">Log In</a>;
}

