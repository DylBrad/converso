'use client';
import * as React from 'react';
import LessonCard from '../LessonCard/LessonCard';
import Button from '@/app/components/Button/Button';

const LessonData = [
  {
    _id: 1234,
    lessonSlides: [
      {
        phrase: 'Ola, tudo bem?',
        translation: 'Hi, how are you?',
      },
      {
        phrase: 'Oi, estou bom, brigado. E voce?',
        translation: 'Hi, Im good thanks. And you?',
      },
      {
        phrase: 'Estou muito bom tambem.',
        translation: 'I am very good as well',
      },
    ],
  },
];

const LessonContainer = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  console.log('LESSON', LessonData[0].lessonSlides[0].phrase);
  console.log('COUNT', count);

  return (
    <>
      <div className="main-content lesson-content">
        <div className="lesson">
          <LessonCard
            key={count}
            count={count}
            phrase={LessonData[0].lessonSlides[count].phrase}
            translation={LessonData[0].lessonSlides[count].translation}
          />
          <div className="button-container">
            {count > 0 && (
              <Button bg={'bg-mainblue'} onClick={handleDecrement}>
                Previous
              </Button>
            )}
            {count < LessonData[0].lessonSlides.length - 1 && (
              <Button bg={'bg-mainblue'} onClick={handleIncrement}>
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
