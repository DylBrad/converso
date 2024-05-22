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
}

const AuthModal: React.FC<AuthModalProps> = ({ setDisplay, setAuthToken }) => {
  const { register, handleSubmit } = useForm();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [isSignUp, setIsSignUp] = React.useState(true);

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

        console.log('1 ----->>>>>', loggedIn);

        if (loggedIn.token !== undefined) {
          setCookie('token', loggedIn.token);
          setAuthToken(loggedIn.token);
          setDisplay('FlashCardsContainer');
        }
        console.log('TOKEN', cookies.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    console.log('Close Auth Modal');
  };
  const handleIsSignIn = () => {
    setIsSignUp(false);
  };
  const handleIsSignUp = () => {
    setIsSignUp(true);
  };

  return (
    <div className="auth-container">
      <div className="delete-btn-wrapper">
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
        <button>{isSignUp ? 'Create Account' : 'Log In'}</button>
      </form>
      <div onClick={isSignUp ? handleIsSignIn : handleIsSignUp}>
        {isSignUp ? 'Already a member? Sign in.' : 'Not a member? Sign Up Here'}
      </div>
    </div>
  );
};

export default AuthModal;
