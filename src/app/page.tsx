'use client';
import * as React from 'react';
import MainNavigation from './components/MainNavigation/MainNavigation';
import MainContent from './homeComponents/MainContent/MainContent';
import LessonContainer from './lessonsComponents/LessonContainer/LessonContainer';
import FlashCardsContaner from './flashCardsComponents/FlashCardsContainer/FlashCardsContainer';
import ProfileContainer from './profileComponents/ProfileContainer/ProfileContainer';
import AuthModal from './components/AuthModal/AuthModal';

export default function Home() {
  const [display, setDisplay] = React.useState('MainContent');
  const [lessonId, setLessonId] = React.useState('');

  return (
    <main>
      <div className="main-content-container">
        {display === 'AuthModal' && <AuthModal />}
        {display === 'MainContent' && (
          <MainContent
            display={display}
            setDisplay={setDisplay}
            setLessonId={setLessonId}
          />
        )}
        {display === 'LessonContainer' && (
          <LessonContainer setDisplay={setDisplay} id={lessonId} />
        )}

        {display === 'FlashCardsContainer' && (
          <FlashCardsContaner display={display} setDisplay={setDisplay} />
        )}
        {display === 'ProfileContainer' && <ProfileContainer />}
      </div>
      <MainNavigation display={display} setDisplay={setDisplay} />
    </main>
  );
}
