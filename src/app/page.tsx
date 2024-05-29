'use client';
import * as React from 'react';
import { useCookies } from 'react-cookie';

import MainNavigation from './components/MainNavigation/MainNavigation';
import MainContent from './homeComponents/MainContent/MainContent';
import LessonContainer from './lessonsComponents/LessonContainer/LessonContainer';
import FlashCardsContaner from './flashCardsComponents/FlashCardsContainer/FlashCardsContainer';
import ProfileContainer from './profileComponents/ProfileContainer/ProfileContainer';
import AuthModal from './components/AuthModal/AuthModal';
import TopMenu from './components/TopMenu/TopMenu';
import AuthReminder from './components/AuthReminder/AuthReminder';

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [authToken, setAuthToken] = React.useState(cookies.token || '');
  const [display, setDisplay] = React.useState('MainContent');
  const [displayReminder, setDisplayReminder] = React.useState('');
  const [isSignUp, setIsSignUp] = React.useState(true);
  const [lessonId, setLessonId] = React.useState('');

  return (
    <main>
      <div className="main-content-container">
        {display === 'AuthModal' && (
          <AuthModal
            setDisplay={setDisplay}
            setAuthToken={setAuthToken}
            isSignUp={isSignUp}
            setIsSignUp={setIsSignUp}
          />
        )}
        {displayReminder === 'AuthReminder' && (
          <AuthReminder
            setDisplayReminder={setDisplayReminder}
            setIsSignUp={setIsSignUp}
            setDisplay={setDisplay}
          />
        )}
        {display === 'MainContent' && (
          <TopMenu
            display={display}
            setDisplay={setDisplay}
            authToken={authToken}
          />
        )}
        {display === 'FlashCardsContainer' && (
          <TopMenu
            display={display}
            setDisplay={setDisplay}
            authToken={authToken}
          />
        )}
        {display === 'MainContent' && (
          <MainContent setDisplay={setDisplay} setLessonId={setLessonId} />
        )}
        {display === 'LessonContainer' && (
          <LessonContainer setDisplay={setDisplay} id={lessonId} />
        )}
        {display === 'FlashCardsContainer' && <FlashCardsContaner />}
        {display === 'ProfileContainer' && <ProfileContainer />}
      </div>
      <MainNavigation
        display={display}
        setDisplay={setDisplay}
        setDisplayReminder={setDisplayReminder}
        authToken={authToken}
      />
    </main>
  );
}
