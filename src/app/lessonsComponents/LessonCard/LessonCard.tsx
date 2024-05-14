'use client';
import * as React from 'react';
import Image from 'next/image';
import { FaEyeLowVision } from 'react-icons/fa6';
import MenTalkingLeft from '../../../../public/conversations/men-talking-right.svg';
import MenTalkingRight from '../../../../public/conversations/men-talking-left.svg';

interface LessonCardProps {
  count: number;
  phrase: 'string';
  translation: 'string';
}

const LessonCard: React.FC<LessonCardProps> = ({
  count,
  phrase,
  translation,
}) => {
  const [isEven, setIsEven] = React.useState(true);
  const [obscure, setObscure] = React.useState(true);

  const checkIsEven = (n: number) => {
    return n % 2 == 0;
  };

  const showTranslation = () => {
    setObscure(false);
  };

  React.useEffect(() => {
    setIsEven(checkIsEven(count));
    console.log(checkIsEven(count));
  }, [isEven]);

  return (
    <>
      <div className="lesson-card">
        <div className="lesson-phrases fade-in">
          <p>{phrase}</p>
          <div className="obscure-container">
            <p className={obscure ? 'faded' : ''}>{translation}</p>
            <div
              onClick={showTranslation}
              className={obscure ? 'obscure' : 'hide'}
            >
              <FaEyeLowVision />
            </div>
          </div>
        </div>
        <div className="lesson-image fade-in">
          <Image
            src={isEven ? MenTalkingLeft : MenTalkingRight}
            alt="lessons"
            width={345}
            height={345}
            priority
          />
        </div>
        <a href="https://storyset.com/people">
          <span>People illustrations by Storyset</span>
        </a>
      </div>
    </>
  );
};

export default LessonCard;
