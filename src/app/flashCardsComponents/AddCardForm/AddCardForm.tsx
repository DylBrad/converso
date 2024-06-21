'use client';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { addCardToUser } from '@/app/API';

import Input from '@/app/components/formComponents/Input/Input';
import Button from '@/app/components/Button/Button';

interface AddCardFormProps {
  currentUsersId: string;
  setShowAddCardForm: any;
  updateUsersCards: () => void;
}

const AddCardForm: React.FC<AddCardFormProps> = ({
  currentUsersId,
  setShowAddCardForm,
  updateUsersCards,
}) => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (data: any) => {
    try {
      const response = await addCardToUser(currentUsersId, data);

      if (response.ok) {
        updateUsersCards();
        setShowAddCardForm(false);
      } else if (response.status === 400) {
        const errorMessage = await response.json();
        setError(errorMessage.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error);
    }
  };

  const onClose = () => {
    setShowAddCardForm(false);
  };

  return (
    <div className="add-cards-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input fieldName={'english'} register={register}>
          English
        </Input>
        <Input fieldName={'portugueseBrazil'} register={register}>
          Portuguese
        </Input>

        <div className="button-container">
          {error && <span>{error}</span>}

          <Button
            fontSize={'medium'}
            bg={'bg-mainblue'}
            txtColor={'text-offwhite'}
          >
            Add Card
          </Button>
          <span onClick={onClose} className="button-container">
            Cancel
          </span>
        </div>
      </form>
    </div>
  );
};

export default AddCardForm;
