'use client';
import * as React from 'react';
import { IoClose } from 'react-icons/io5';
import { getAllUsersCards } from '@/app/API';

import Button from '@/app/components/Button/Button';
import Card from '../Card/Card';

interface UsersCards {
  english: string;
  portugueseBrazil: string;
}

interface UserCardContainerProps {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  currentUsersId: string;
}

const UserCardContainer: React.FC<UserCardContainerProps> = ({
  setDisplay,
  currentUsersId,
}) => {
  const [usersCards, setUsersCards] = React.useState<UsersCards[]>([]);
  const [obscure, setObscure] = React.useState(true);
  const [count, setCount] = React.useState(0);

  const getUsersCards = async () => {
    const response = await getAllUsersCards(currentUsersId);
    setUsersCards(response);
  };

  React.useEffect(() => {
    getUsersCards();
  }, []);

  const handleReminder = () => {
    const element = document.getElementById('translationHidden');
    if (!element) {
      console.error('Element not found.');
      return;
    }
    // Define reminder animation
    var keyframes = [
      { transform: 'scale(1)' },
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' },
    ];
    var options = {
      duration: 500,
      iterations: 3,
      easing: 'ease-in-out',
    };
    element.animate(keyframes, options);
  };

  const flashCard = (color: 'red' | 'green') => {
    const cardElement = document.getElementById('card');
    if (!cardElement) {
      console.error('Card element not found.');
      return;
    }
    const className =
      color === 'red' ? 'flash-border-red' : 'flash-border-green';
    cardElement.classList.add(className);
    setTimeout(() => {
      cardElement.classList.remove(className);
    }, 500); // Match the duration of the CSS animation
  };

  const handleIncorrect = () => {
    if (obscure) {
      handleReminder();
      return;
    }
    flashCard('red');
    const currentCardData = {
      english: usersCards[count].english,
      portugueseBrazil: usersCards[count].portugueseBrazil,
    };
    setUsersCards((prev) => [...prev, currentCardData]);
    setObscure(true);
    setCount(count + 1);
  };

  const handleCorrect = () => {
    if (obscure) {
      handleReminder();
      return;
    }
    flashCard('green');
    if (count === usersCards.length - 1) {
      setDisplay('FlashCardsContainer');
      return;
    }
    setObscure(true);
    setCount(count + 1);
  };

  const handleCloseStack = () => {
    if (obscure) {
      handleReminder();
      return;
    }
    setDisplay('FlashCardsContainer');
  };

  return (
    <div className="main-content lesson-content">
      <div className="card-tilt-L"></div>
      <div className="card-tilt-R"></div>
      <div className="lesson large-card" id="card">
        <div className="close-btn-wrapper">
          <Button
            fontSize={'medium'}
            bg={'bg-white'}
            txtColor={'text-offblack'}
            onClick={handleCloseStack}
          >
            <IoClose />
          </Button>
        </div>
        {usersCards[count] && (
          <Card
            key={count}
            count={count}
            phrase={usersCards[count].english}
            translation={usersCards[count].portugueseBrazil}
            obscure={obscure}
            setObscure={setObscure}
          />
        )}
        <div className="button-container">
          <Button
            fontSize={'medium'}
            bg={'bg-mainred'}
            txtColor={'text-offwhite'}
            onClick={handleIncorrect}
          >
            Try again
          </Button>
          <Button
            fontSize={'medium'}
            bg={'bg-mainblue'}
            txtColor={'text-offwhite'}
            onClick={handleCorrect}
          >
            Got it!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCardContainer;
