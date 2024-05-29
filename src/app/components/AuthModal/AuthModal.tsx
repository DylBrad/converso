import * as React from 'react';
import { IoClose } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { createUser, logInUser } from '@/app/API';

import Button from '../Button/Button';
import Input from '../formComponents/Input/Input';

interface AuthModalProps {
  setDisplay: any;
  setAuthToken: any;
  isSignUp: boolean;
  setIsSignUp: any;
}

const AuthModal: React.FC<AuthModalProps> = ({
  setDisplay,
  setAuthToken,
  isSignUp,
  setIsSignUp,
}) => {
  const { register, handleSubmit } = useForm();
  const [cookies, setCookie, removeCookie] = useCookies<
    string,
    { token?: string }
  >([]);

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      if (isSignUp) {
        await createUser(data);
        setIsSignUp(false);
        return;
      }
      if (!isSignUp) {
        const loggedIn = await logInUser(data);

        if (loggedIn.token !== undefined) {
          setCookie('token', loggedIn.token);
          setAuthToken(loggedIn.token);
          setDisplay('FlashCardsContainer');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setDisplay('MainContent');
  };
  const handleIsSignIn = () => {
    setIsSignUp(false);
  };
  const handleIsSignUp = () => {
    setIsSignUp(true);
  };

  return (
    <div className="auth-wrapper large-card">
      <div className="close-btn-wrapper">
        <Button
          fontSize={'medium'}
          bg={'bg-white'}
          txtColor={'text-offblack'}
          onClick={handleClose}
        >
          <IoClose />
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isSignUp && (
          <Input fieldName={'username'} register={register}>
            Username
          </Input>
        )}
        <Input fieldName={'email'} register={register}>
          Email
        </Input>
        <Input fieldName={'password'} register={register}>
          Password
        </Input>
        <Button
          fontSize={'medium'}
          bg={'bg-mainblue'}
          txtColor={'text-offwhite'}
        >
          {isSignUp ? 'Create Account' : 'Log In'}
        </Button>
      </form>
      <div
        className="div-text"
        onClick={isSignUp ? handleIsSignIn : handleIsSignUp}
      >
        {isSignUp ? (
          <>
            Already a member? <span>Sign in</span>
          </>
        ) : (
          <>
            Not a member? <span>Sign Up Here</span>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
