'use client';
import * as React from 'react';
import MainNavigation from './components/MainNavigation/MainNavigation';
import MainContent from './homeComponents/MainContent/MainContent';
import LessonContainer from './lessonsComponents/LessonContainer/LessonContainer';

export default function Home() {
  const [displayLesson, setDisplayLesson] = React.useState(false);
  const [lessonId, setLessonId] = React.useState('');

  return (
    <main>
      <div className="main-content-container">
        {!displayLesson && (
          <MainContent
            setDisplayLesson={setDisplayLesson}
            setLessonId={setLessonId}
          />
        )}
        {displayLesson && (
          <LessonContainer setDisplayLesson={setDisplayLesson} id={lessonId} />
        )}
      </div>
      <MainNavigation />
    </main>
  );
}
