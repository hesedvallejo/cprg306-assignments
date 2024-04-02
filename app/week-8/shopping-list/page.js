"use client";
import { useUserAuth } from "./_utils/auth-context";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLoginClick = () => {
    gitHubSignIn();
  };

  const handleLogoutClick = () => {
    firebaseSignOut();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogoutClick}>Logout</button>
          <Link to="/shopping-list">Go to Shopping List</Link>
        </div>
      ) : (
        <button onClick={handleLoginClick}>Login with GitHub</button>
      )}
    </div>
  );
}