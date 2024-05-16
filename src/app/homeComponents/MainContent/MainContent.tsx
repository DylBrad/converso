'use client';
import * as React from 'react';
import { getAllLessons } from '../../API';

import Thumbnail from '../Thumbnail/Thumbnail';

interface MainContentProps {
  setDisplayLesson: any;
  setLessonId: any;
}

const MainContent: React.FC<MainContentProps> = ({
  setDisplayLesson,
  setLessonId,
}) => {
  const [lessons, setLessons] = React.useState([]);

  const handleClick = (selectedLessonId: string) => {
    setDisplayLesson(true);
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
      <div className="home-header">
        <div>
          <span>Conversations</span>
        </div>
        <div className="inactive">
          <span>Cards</span>
        </div>
      </div>
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
