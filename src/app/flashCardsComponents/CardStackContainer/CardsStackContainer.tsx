'use client';
import * as React from 'react';
import { IoClose } from 'react-icons/io5';
import { addCardToUser, getOneCardStack } from '@/app/API';

import Button from '@/app/components/Button/Button';
import Card from '../Card/Card';

interface CardStackContainerProps {
  setDisplay: any;
  id: string;
  currentUsersId: string;
}

interface Card {
  english: string;
  portugueseBrazil: string;
}

interface CardData {
  cards: Card[];
}

const CardStackContainer: React.FC<CardStackContainerProps> = ({
  setDisplay,
  id,
  currentUsersId,
}) => {
  const [count, setCount] = React.useState(0);
  const [obscure, setObscure] = React.useState(true);
  const [cardData, setCardData] = React.useState<CardData | null>(null);
  const [cardExistsError, setCardExistsError] = React.useState('');

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

  const handleAddcard = async () => {
    if (obscure && cardData && count <= cardData.cards.length - 1) {
      handleReminder();
    } else if (!obscure && cardData && count < cardData.cards.length - 1) {
      const currentCard = cardData.cards[count];
      const data = {
        english: currentCard.english,
        portugueseBrazil: currentCard.portugueseBrazil,
      };

      try {
        const response = await addCardToUser(currentUsersId, data);
        if (response.ok) {
          setCount(count + 1);
          setObscure(true);
        } else {
          const error = await response.json();
          setCardExistsError(error.message);
        }
      } catch (error) {
        console.error('Error adding card:', error);
      }
    } else if (!obscure && cardData && count <= cardData.cards.length - 1) {
      const currentCard = cardData.cards[count];
      const data = {
        english: currentCard.english,
        portugueseBrazil: currentCard.portugueseBrazil,
      };

      try {
        const response = await addCardToUser(currentUsersId, data);
        if (response.ok) {
          setDisplay('FlashCardsContainer');
        } else {
          const error = await response.json();
          setCardExistsError(error.message);
        }
      } catch (error) {
        console.error('Error adding card:', error);
      }
    }
  };
  const handlePassCard = () => {
    if (cardData && count === cardData.cards.length - 1) {
      setDisplay('FlashCardsContainer');
      return;
    }

    setObscure(true);
    setCount(count + 1);
  };

  const handleCloseStack = () => {
    setDisplay('FlashCardsContainer');
  };

  // Get full card stack
  const getCardStack: any = async () => {
    const card = await getOneCardStack(id);
    setCardData(card);
  };

  React.useEffect(() => {
    getCardStack();
  }, []);

  return (
    <>
      <div className="main-content lesson-content">
        <div className="lesson large-card">
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
          {cardData?.cards && count >= 0 && (
            <Card
              key={count}
              count={count}
              phrase={cardData.cards[count].english}
              translation={cardData.cards[count].portugueseBrazil}
              obscure={obscure}
              setObscure={setObscure}
            />
          )}
          <div className="button-container">
            <Button
              fontSize={'medium'}
              bg={'bg-mainred'}
              txtColor={'text-offwhite'}
              onClick={handlePassCard}
            >
              Skip
            </Button>
            <Button
              fontSize={'medium'}
              bg={'bg-mainblue'}
              txtColor={'text-offwhite'}
              onClick={handleAddcard}
            >
              Add Card
            </Button>
          </div>
          {cardExistsError && (
            <span className="error card-error">{cardExistsError}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default CardStackContainer;
