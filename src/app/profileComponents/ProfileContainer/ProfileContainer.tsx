'use client';
import * as React from 'react';
import { deleteUser } from '@/app/API';

interface ProfileContainerProps {
  currentUsersId: string;
  removeCookie: any;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}
const ProfileContainer: React.FC<ProfileContainerProps> = ({
  currentUsersId,
  removeCookie,
  setIsSignUp,
  setDisplay,
}) => {
  const handleSignOut = () => {
    console.log('sign out');
    removeCookie('token');
    window.location.reload();
  };

  const handleDeleteAccount = async () => {
    console.log('Delete accont');
    await deleteUser(currentUsersId);
    removeCookie('token');
    window.location.reload();
  };

  const handleSignIn = () => {
    console.log('Sign in');
    setDisplay('AuthModal');
    setIsSignUp(false);
  };
  const handleCreateAccount = () => {
    setDisplay('AuthModal');
    setIsSignUp(true);
  };

  return (
    <div className="profile-container">
      <ul>
        {currentUsersId && (
          <>
            <li onClick={handleSignOut}>Sign Out</li>
            <li onClick={handleDeleteAccount}>Delete Account</li>
          </>
        )}
        {!currentUsersId && (
          <>
            <li onClick={handleSignIn}>Sign In</li>
            <li onClick={handleCreateAccount}>Create Account</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default ProfileContainer;
