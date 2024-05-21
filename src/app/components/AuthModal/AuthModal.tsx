import * as React from 'react';
import { IoClose } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { createUser } from '@/app/API';

import Button from '../Button/Button';
import Input from '../formComponents/Input/Input';

// import createUser from API

const AuthModal = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    createUser(data);
  };

  const handleClose = () => {
    console.log('Close Auth Modal');
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
        <Input fieldName={'username'} register={register}>
          Username
        </Input>
        <Input fieldName={'email'} register={register}>
          Email
        </Input>
        <Input fieldName={'password'} register={register}>
          Password
        </Input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AuthModal;
