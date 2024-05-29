'use client';
import * as React from 'react';
import { getAllLessons } from '../../API';

import Thumbnail from '../Thumbnail/Thumbnail';

interface MainContentProps {
  setDisplay: any;
  setLessonId: any;
}

interface Lesson {
  _id: string;
  title: string;
  thumbnail: string;
}

const MainContent: React.FC<MainContentProps> = ({
  setDisplay,
  setLessonId,
}) => {
  const [lessons, setLessons] = React.useState<Lesson[]>([]);

  const handleClick = (selectedLessonId: string) => {
    setDisplay('LessonContainer');
    // this should open the lesson we click on
    setLessonId(selectedLessonId);
  };

  const getCurrentLesson = async () => {
    const response: Lesson[] = await getAllLessons();
    setLessons(response);
  };

  React.useEffect(() => {
    getCurrentLesson();
  }, []);

  return (
    <>
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
