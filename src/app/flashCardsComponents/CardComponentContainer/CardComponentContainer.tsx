'use client';
import * as React from 'react';

import { getAllCardStacks, getAllUsersCards } from '../../API';
import Thumbnail from '@/app/components/Thumbnail/Thumbnail';
import Button from '@/app/components/Button/Button';
import AddCardForm from '../AddCardForm/AddCardForm';

interface Cards {
  _id: string;
  category: string;
  thumbnail: string;
}

interface UsersCards {
  english: string;
  portugueseBrazil: string;
}

interface CardComponentContainerProps {
  setStackId: any;
  setDisplay: any;
  currentUsersId: string;
}

const CardComponentContainer: React.FC<CardComponentContainerProps> = ({
  setStackId,
  setDisplay,
  currentUsersId,
}) => {
  const [usersCards, setUsersCards] = React.useState<UsersCards[]>([]);
  const [cardStacks, setCardStacks] = React.useState<Cards[]>([]);
  const [showAddCardForm, setShowAddCardForm] = React.useState(false);

  const getCards = async () => {
    const allCards: Cards[] = await getAllCardStacks();
    setCardStacks(allCards);
  };
  const getUserscards = async () => {
    const cards = await getAllUsersCards(currentUsersId);
    setUsersCards(cards);
  };

  React.useEffect(() => {
    getCards();
    getUserscards();
  }, [currentUsersId]);

  const handleClick = (id: string) => {
    setStackId(id);
    setDisplay('CardsContainer');
  };

  const handleAddCustomCard = () => {
    setShowAddCardForm(true);
  };

  const handleLearn = () => {
    setDisplay('UserCardContainer');
  };

  return (
    <div className="main-content">
      <div className="users-cards-display">
        {usersCards[0] ? (
          <div>
            {!showAddCardForm && (
              <>
                <div className="cards-to-learn">
                  <h2>
                    <span>{usersCards.length}</span> cards
                  </h2>
                  <p>to learn</p>
                </div>
                <Button
                  fontSize={'medium'}
                  bg={'bg-mainblue'}
                  txtColor={'text-offwhite'}
                  onClick={handleLearn}
                >
                  Start Learning
                </Button>

                <Button
                  fontSize={'medium'}
                  bg={'bg-mainblue'}
                  txtColor={'text-offwhite'}
                  onClick={handleAddCustomCard}
                >
                  Add More Cards
                </Button>
              </>
            )}
            {showAddCardForm && (
              <AddCardForm
                currentUsersId={currentUsersId}
                setShowAddCardForm={setShowAddCardForm}
                updateUsersCards={getUserscards}
              />
            )}
          </div>
        ) : (
          <div>
            <h3>Hmmm.. You don&apos;t have any flash cards.</h3>
            {!showAddCardForm && (
              <>
                <Button
                  fontSize={'medium'}
                  bg={'bg-mainblue'}
                  txtColor={'text-offwhite'}
                  onClick={handleAddCustomCard}
                >
                  Add Cards
                </Button>
              </>
            )}
            {showAddCardForm && (
              <AddCardForm
                currentUsersId={currentUsersId}
                setShowAddCardForm={setShowAddCardForm}
                updateUsersCards={getUserscards}
              />
            )}
          </div>
        )}
      </div>
      <span className="divider"></span>
      <h4>Need some ideas? Browse flashcards collections!</h4>
      <ul className="thumb-list">
        {cardStacks.map((stack) => {
          return (
            <Thumbnail
              key={stack._id}
              title={stack.category}
              thumb={stack.thumbnail}
              handleClick={() => handleClick(stack._id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CardComponentContainer;
