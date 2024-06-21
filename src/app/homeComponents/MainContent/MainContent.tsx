'use client';
import * as React from 'react';
import { getLessons } from '../../API';

import Thumbnail from '../../components/Thumbnail/Thumbnail';

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

  // open the lesson we click on
  const handleClick = (selectedLessonId: string) => {
    setDisplay('LessonContainer');
    setLessonId(selectedLessonId);
  };

  const getAllLessons = async () => {
    const response: Lesson[] = await getLessons();
    setLessons(response);
  };
  React.useEffect(() => {
    getAllLessons();
  }, []);

  return (
    <>
      <div className="main-content">
        <ul className="thumb-list">
          {lessons.map((lesson) => {
            return (
              <Thumbnail
                key={lesson._id}
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
