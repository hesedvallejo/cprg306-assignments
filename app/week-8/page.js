'use client';
import { useState, useEffect } from 'react';
import { useUserAuth } from './_utils/auth-context';
import Link from 'next/link';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('Error during GitHub sign-in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  return (
    <div>
      {isClient && (
        <>
          {user ? (
            <>
              <p>
                Welcome, {user.displayName} ({user.email})
              </p>
              <button onClick={handleSignOut}>Sign Out</button>
              <Link href="/week8/shopping-list">Go to Shopping List</Link>
            </>
          ) : (
            <button onClick={handleSignIn}>Sign In with GitHub</button>
          )}
        </>
      )}
    </div>
  );
}