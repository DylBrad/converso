'use client';
import * as React from 'react';
import { IoClose } from 'react-icons/io5';
import LessonCard from '../LessonCard/LessonCard';
import Button from '@/app/components/Button/Button';

import { getOneLesson } from '../../API';

interface Card {
  english: string;
  portugueseBrazil: string;
}

interface LessonData {
  cards: Card[];
}

interface LessonContainerProps {
  setDisplay: any;
  id: string;
}

const LessonContainer: React.FC<LessonContainerProps> = ({
  setDisplay,
  id,
}) => {
  const [count, setCount] = React.useState(0);
  const [obscure, setObscure] = React.useState(true);
  const [lessonData, setLessonData] = React.useState<LessonData | null>(null);

  const handleIncrement = () => {
    if (!obscure && lessonData && count < lessonData.cards.length - 1) {
      setCount(count + 1);
      setObscure(true);
    } else {
      console.log('Finish the lesson');
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

  const handleCloseLesson = () => {
    setDisplay('MainContent');
  };

  // change this to just get the lesson that was clicked on.
  const getCurrentLesson: any = async () => {
    const lesson = await getOneLesson(id);
    setLessonData(lesson);
  };

  React.useEffect(() => {
    getCurrentLesson();
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
        </div>
      </div>
    </>
  );
};

export default LessonContainer;
