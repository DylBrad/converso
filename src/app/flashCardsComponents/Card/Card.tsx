'use client';
import * as React from 'react';
import { FaEyeLowVision } from 'react-icons/fa6';

interface CardProps {
  count: number;
  phrase: string;
  translation: string;
  obscure: boolean;
  setObscure: any;
}

const Card: React.FC<CardProps> = ({
  phrase,
  translation,
  obscure,
  setObscure,
}) => {
  const showTranslation = () => {
    setObscure(false);
  };

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
              id="translationHidden"
            >
              <FaEyeLowVision />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
