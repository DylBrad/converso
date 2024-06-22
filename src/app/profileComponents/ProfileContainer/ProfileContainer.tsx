'use client';
import * as React from 'react';
import { CiLogout } from 'react-icons/ci';
import { MdDeleteForever, MdOutlineCreateNewFolder } from 'react-icons/md';
import { IoIosReturnLeft, IoIosLogIn } from 'react-icons/io';

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
  const [isDelete, setIsDelete] = React.useState(false);

  const handleSignOut = () => {
    removeCookie('token');
    window.location.reload();
  };

  const handleDeleteAccount = () => {
    setIsDelete(true);
  };

  const handleConfirmDeleteAccount = async () => {
    await deleteUser(currentUsersId);
    removeCookie('token');
    window.location.reload();
  };

  const handleCloseDelete = () => {
    setIsDelete(false);
  };

  const handleSignIn = () => {
    setDisplay('AuthModal');
    setIsSignUp(false);
  };
  const handleCreateAccount = () => {
    setDisplay('AuthModal');
    setIsSignUp(true);
  };

  return (
    <div className="profile-container">
      {currentUsersId && !isDelete && (
        <ul>
          <li onClick={handleSignOut}>
            <CiLogout />
            <span>Sign Out</span>
          </li>
          <li onClick={handleDeleteAccount} className="delete">
            <MdDeleteForever />

            <span>Delete Account</span>
          </li>
        </ul>
      )}
      {currentUsersId && isDelete && (
        <>
          <ul>
            <li onClick={handleCloseDelete}>
              <IoIosReturnLeft />
              <span>Cancel</span>
            </li>
            <li onClick={handleConfirmDeleteAccount} className="delete">
              <MdDeleteForever />
              <span>Permenantly Delete</span>
            </li>
          </ul>
        </>
      )}
      {!currentUsersId && (
        <ul>
          <li onClick={handleSignIn}>
            <IoIosLogIn />
            <span>Sign In</span>
          </li>
          <li onClick={handleCreateAccount} className="delete">
            <MdOutlineCreateNewFolder />
            <span>Create Account</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileContainer;
