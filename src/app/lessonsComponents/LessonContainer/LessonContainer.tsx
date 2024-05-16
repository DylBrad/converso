'use client';
import * as React from 'react';
import { IoClose } from 'react-icons/io5';
import LessonCard from '../LessonCard/LessonCard';
import Button from '@/app/components/Button/Button';

import { getLesson } from '../../API';

const LessonData = [
  {
    _id: '11',
    title: 'Introducing yourself',
    description: 'Having a conversation with a new person',
    graphics: 'men_talking',
    cards: [
      {
        _id: '66446482e7599bd4d481841a',
        english: 'Hello',
        portugueseBrazil: 'Ola',
      },
      {
        _id: '66446482e7599bd4d481841b',
        english: 'How are you?',
        portugueseBrazil: 'Tudo bem?',
      },
      {
        _id: '66446482e7599bd4d481841c',
        english: 'I am very good, thank you',
        portugueseBrazil: 'Estou muito bom, brigado.',
      },
    ],
  },
  {
    _id: '12',
    title: 'Checking in at an airport',
    description: 'Checking in and finding your gate',
    graphics: 'men_talking',
    cards: [
      {
        _id: '76446482e7599bd4d481841a',
        english: 'Can I check in please',
        portugueseBrazil: 'Onde o ponto de check in',
      },
      {
        _id: '76446482e7599bd4d481841b',
        english: 'It is over there',
        portugueseBrazil: 'Esta ali',
      },
      {
        _id: '76446482e7599bd4d481841c',
        english: 'Thanks very much',
        portugueseBrazil: 'Muito obrigado',
      },
    ],
  },
  {
    _id: '13',
    title: 'Ordering a meal',
    description: 'Talking to a waiter',
    graphics: 'men_talking',
    cards: [
      {
        _id: '86446482e7599bd4d481841a',
        english: 'Hello, i would like to order some foor',
        portugueseBrazil: 'Oi, eu quero pedir comida',
      },
      {
        _id: '86446482e7599bd4d481841b',
        english: 'What can i get you?',
        portugueseBrazil: 'O que voce quer?',
      },
      {
        _id: '86446482e7599bd4d481841c',
        english: 'I want the beef and rice',
        portugueseBrazil: 'Eu quero o bife e arroz',
      },
    ],
  },
];

interface LessonContainerProps {
  setDisplayLesson: any;
}

const LessonContainer: React.FC<LessonContainerProps> = ({
  setDisplayLesson,
}) => {
  const [count, setCount] = React.useState(0);
  const [obscure, setObscure] = React.useState(true);

  const handleIncrement = () => {
    if (obscure === false) {
      setCount(count + 1);
      setObscure(true);
    } else {
      console.log('Finish the lesson');
      const element = document.getElementById('translationHidden');
      if (!element) {
        console.error('Element not found.');
        return;
      }

      // Define keyframes for the animation
      var keyframes = [
        { transform: 'scale(1)' },
        { transform: 'scale(1.3)' },
        { transform: 'scale(1)' },
      ];

      // Define animation options
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
    setDisplayLesson(false);
  };

  // change this to just get the lesson that was clicked on.
  const getCurrentLesson: any = async () => {
    const lessons = await getLesson();
    console.log('LESSONS', lessons);
    return lessons;
  };

  React.useEffect(() => {
    // getCurrentLesson();
  }, []);

  return (
    <>
      <div className="main-content lesson-content">
        <div className="lesson">
          <div className="delete-btn-wrapper">
            <Button
              fontSize={'medium'}
              bg={'bg-white'}
              txtColor={'text-offblack'}
              onClick={handleCloseLesson}
            >
              <IoClose />
            </Button>
          </div>
          <LessonCard
            key={count}
            count={count}
            phrase={LessonData[0].cards[count].english}
            translation={LessonData[0].cards[count].portugueseBrazil}
            obscure={obscure}
            setObscure={setObscure}
          />
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
            {count < LessonData[0].cards.length - 1 && (
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
