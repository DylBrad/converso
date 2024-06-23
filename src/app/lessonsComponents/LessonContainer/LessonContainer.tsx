'use client';
import * as React from 'react';
import { IoClose, IoAddCircleOutline } from 'react-icons/io5';
import { SiTicktick } from 'react-icons/si';

import LessonCard from '../LessonCard/LessonCard';
import Button from '@/app/components/Button/Button';

import { getOneLesson, addCardToUser } from '../../API';

interface Card {
  english: string;
  portugueseBrazil: string;
}

interface LessonData {
  cards: Card[];
}

interface LessonContainerProps {
  setDisplay: any;
  setDisplayReminder: any;
  lessonId: string;
  currentUsersId: string;
}

const LessonContainer: React.FC<LessonContainerProps> = ({
  setDisplay,
  setDisplayReminder,
  lessonId,
  currentUsersId,
}) => {
  const [count, setCount] = React.useState(0);
  const [obscure, setObscure] = React.useState(true);
  const [lessonData, setLessonData] = React.useState<LessonData | null>(null);
  const [showNotification, setShowNotification] = React.useState(false);
  const [cardExists, setCardExists] = React.useState(false);

  const handleIncrement = () => {
    if (!obscure && lessonData && count < lessonData.cards.length - 1) {
      setCount(count + 1);
      setObscure(true);
    } else {
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
    }
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleAddToFlashcards = async () => {
    const data = {
      english: lessonData?.cards[count].english,
      portugueseBrazil: lessonData?.cards[count].portugueseBrazil,
    };

    if (currentUsersId.length <= 0) {
      setDisplayReminder('AuthReminder');
      return;
    }

    try {
      const response = await addCardToUser(currentUsersId, data);

      if (response.ok) {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 4000);
      } else {
        setCardExists(true);
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
          setCardExists(false);
        }, 4000);
      }
    } catch (error) {
      console.error('Problem adding card to users flashcards', error);
    }
  };

  const handleCloseLesson = () => {
    setDisplay('MainContent');
  };

  const getCurrentLesson: any = async () => {
    const lesson = await getOneLesson(lessonId);
    setLessonData(lesson);
  };

  React.useEffect(() => {
    getCurrentLesson();
  }, []);

  return (
    <>
      <div className="main-content lesson-content">
        <div className="card-tilt-L"></div>
        <div className="card-tilt-R"></div>
        <div className="lesson large-card">
          <div className="close-btn-wrapper">
            <Button
              fontSize={'medium'}
              bg={'bg-white'}
              txtColor={'text-offblack'}
              onClick={handleCloseLesson}
            >
              <IoClose />
            </Button>
          </div>
          {lessonData?.cards && count >= 0 && (
            <LessonCard
              key={count}
              count={count}
              phrase={lessonData.cards[count].english}
              translation={lessonData.cards[count].portugueseBrazil}
              obscure={obscure}
              setObscure={setObscure}
            />
          )}

          <div className="button-container">
            {count > 0 && (
              <Button
                fontSize={'medium'}
                bg={'bg-mainblue'}
                txtColor={'text-offwhite'}
                onClick={handleDecrement}
              >
                Previous
              </Button>
            )}
            {lessonData?.cards && count < lessonData.cards.length - 1 && (
              <Button
                fontSize={'medium'}
                bg={'bg-mainblue'}
                txtColor={'text-offwhite'}
                onClick={handleIncrement}
              >
                Next
              </Button>
            )}
          </div>
          <div className="add-button">
            <div className="add-icon">
              <IoAddCircleOutline onClick={handleAddToFlashcards} />
            </div>
          </div>
          {showNotification && (
            <>
              <div className="talk-bubble">
                <div className="add-icon">
                  <SiTicktick />
                </div>
                <div className="talk-text">
                  <p>
                    {!cardExists
                      ? 'Card added to your flashcards!'
                      : "You've already added this card!"}
                  </p>
                </div>
              </div>
            </>
          )}
          <a href="https://storyset.com/people">
            <span>People illustrations by Storyset</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default LessonContainer;
