'use client';
import * as React from 'react';
import MainNavigation from './components/MainNavigation/MainNavigation';
import MainContent from './homeComponents/MainContent/MainContent';
import LessonContainer from './lessonsComponents/LessonContainer/LessonContainer';

export default function Home() {
  const [displayLesson, setDisplayLesson] = React.useState(false);
  return (
    <main>
      <div className="main-content-container">
        {!displayLesson && <MainContent setDisplayLesson={setDisplayLesson} />}
        {displayLesson && (
          <LessonContainer setDisplayLesson={setDisplayLesson} />
        )}
      </div>
      <MainNavigation />
    </main>
  );
}
