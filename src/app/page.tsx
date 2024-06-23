'use client';
import * as React from 'react';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';

import MainNavigation from './components/MainNavigation/MainNavigation';
import MainContent from './homeComponents/MainContent/MainContent';
import LessonContainer from './lessonsComponents/LessonContainer/LessonContainer';
import CardStackContainer from '@/app/flashCardsComponents/CardStackContainer/CardsStackContainer';
import CardComponentContainer from './flashCardsComponents/CardComponentContainer/CardComponentContainer';
import UserCardContainer from './flashCardsComponents/UserCardContainer/UserCardContainer';
import ProfileContainer from './profileComponents/ProfileContainer/ProfileContainer';
import AuthModal from './components/AuthModal/AuthModal';
import TopMenu from './components/TopMenu/TopMenu';
import AuthReminder from './components/AuthReminder/AuthReminder';

interface CustomJwtPayload {
  userId: string;
}

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [authToken, setAuthToken] = React.useState(cookies.token || '');
  const [display, setDisplay] = React.useState('MainContent');
  const [displayReminder, setDisplayReminder] = React.useState('');
  const [isSignUp, setIsSignUp] = React.useState(true);
  const [lessonId, setLessonId] = React.useState('');
  const [stackId, setStackId] = React.useState('');
  const [currentUsersId, setCurrentUserId] = React.useState('');

  const token = cookies.token;
  React.useEffect(() => {
    if (token !== undefined) {
      try {
        let decodedToken = jwtDecode<CustomJwtPayload>(token);
        setCurrentUserId(decodedToken.userId);
      } catch (error) {
        console.error('Failed to decode token', error);
      }
    }
  }, [cookies]);

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
            setDisplayReminder={setDisplayReminder}
            authToken={authToken}
          />
        )}
        {display === 'FlashCardsContainer' && (
          <TopMenu
            display={display}
            setDisplay={setDisplay}
            setDisplayReminder={setDisplayReminder}
            authToken={authToken}
          />
        )}
        {display === 'MainContent' && (
          <MainContent setDisplay={setDisplay} setLessonId={setLessonId} />
        )}
        {display === 'LessonContainer' && (
          <LessonContainer
            setDisplay={setDisplay}
            setDisplayReminder={setDisplayReminder}
            lessonId={lessonId}
            currentUsersId={currentUsersId}
          />
        )}
        {display === 'CardsContainer' && (
          <CardStackContainer
            setDisplay={setDisplay}
            id={stackId}
            currentUsersId={currentUsersId}
          />
        )}
        {display === 'FlashCardsContainer' && (
          <CardComponentContainer
            setStackId={setStackId}
            setDisplay={setDisplay}
            currentUsersId={currentUsersId}
          />
        )}
        {display === 'UserCardContainer' && (
          <UserCardContainer
            setDisplay={setDisplay}
            currentUsersId={currentUsersId}
          />
        )}
        {display === 'ProfileContainer' && (
          <ProfileContainer
            currentUsersId={currentUsersId}
            removeCookie={removeCookie}
            setIsSignUp={setIsSignUp}
            setDisplay={setDisplay}
          />
        )}
      </div>
      <MainNavigation
        display={display}
        setDisplay={setDisplay}
        setDisplayReminder={setDisplayReminder}
        authToken={authToken}
        setIsSignUp={setIsSignUp}
      />
    </main>
  );
}
