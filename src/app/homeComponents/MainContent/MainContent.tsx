'use client';
import * as React from 'react';
import { getLesson } from '../../API';

import Thumbnail from '../Thumbnail/Thumbnail';

// fake data
const allLessons = [
  {
    id: 11,
    thumb:
      'https://media.istockphoto.com/id/1591572504/photo/cheerful-businesswomen-shaking-hands-in-meeting-room.jpg?s=1024x1024&w=is&k=20&c=GYtKvPPbShP3JOyGRZdlakcQE2_h0skl6g6bU0r83qk=',
    title: 'Greetings & Introductions',
  },
  {
    id: 12,
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
  {
    id: 13,
    thumb:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Arriving at the airport',
  },
];

interface MainContentProps {
  setDisplayLesson: any;
}

const MainContent: React.FC<MainContentProps> = ({ setDisplayLesson }) => {
  const [lessonId, setLessonId] = React.useState(null);

  const handleClick = () => {
    setDisplayLesson(true);
    // this should open the lesson we click on
    setLessonId(lessonId);
  };

  const getCurrentLesson: any = async () => {
    const lessons = await getLesson();
    console.log('LESSONS', lessons);
    return lessons;
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
          {allLessons.map((data) => {
            return (
              <Thumbnail
                key={data.id}
                id={data.id}
                title={data.title}
                thumb={data.thumb}
                handleClick={handleClick}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MainContent;
