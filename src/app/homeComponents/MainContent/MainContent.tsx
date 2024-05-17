'use client';
import * as React from 'react';
import { getAllLessons } from '../../API';

import Thumbnail from '../Thumbnail/Thumbnail';
import TopMenu from '@/app/components/TopMenu/TopMenu';

interface MainContentProps {
  display: string;
  setDisplay: any;
  setLessonId: any;
}

const MainContent: React.FC<MainContentProps> = ({
  display,
  setDisplay,
  setLessonId,
}) => {
  const [lessons, setLessons] = React.useState([]);

  const handleClick = (selectedLessonId: string) => {
    setDisplay('LessonContainer');
    // this should open the lesson we click on
    setLessonId(selectedLessonId);
  };

  const getCurrentLesson: any = async () => {
    const response = await getAllLessons();
    setLessons(response);
  };

  React.useEffect(() => {
    getCurrentLesson();
  }, []);

  return (
    <>
      <TopMenu display={display} setDisplay={setDisplay} />
      <div className="main-content">
        <ul className="thumb-list">
          {lessons.map((lesson) => {
            return (
              <Thumbnail
                key={lesson._id}
                id={lesson._id}
                title={lesson.title}
                thumb={lesson.thumbnail}
                handleClick={() => handleClick(lesson._id)}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MainContent;
