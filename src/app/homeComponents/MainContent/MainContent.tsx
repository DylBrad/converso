'use client';
import * as React from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';

const usersSavedLessons = [
  {
    id: 1234,
    thumb:
      'https://media.istockphoto.com/id/1591572504/photo/cheerful-businesswomen-shaking-hands-in-meeting-room.jpg?s=1024x1024&w=is&k=20&c=GYtKvPPbShP3JOyGRZdlakcQE2_h0skl6g6bU0r83qk=',
    title: 'Greetings & Introductions',
  },
  {
    id: 44,
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
  {
    id: 45,
    thumb:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Arriving at the airport',
  },
  {
    id: 46,
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
  {
    id: 47,
    thumb:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Arriving at the airport',
  },
  {
    id: 48,
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
  {
    id: 12345,
    thumb:
      'https://media.istockphoto.com/id/1591572504/photo/cheerful-businesswomen-shaking-hands-in-meeting-room.jpg?s=1024x1024&w=is&k=20&c=GYtKvPPbShP3JOyGRZdlakcQE2_h0skl6g6bU0r83qk=',
    title: 'Greetings & Introductions',
  },
  {
    id: 49,
    thumb:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Arriving at the airport',
  },
  {
    id: 50,
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
  {
    id: 51,
    thumb:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Arriving at the airport',
  },
  {
    id: 52,
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
  {
    id: 53,
    thumb:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Arriving at the airport',
  },
  {
    id: 54,
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
];

const uri = 'http://localhost:3001/api/lessons';

interface MainContentProps {
  setDisplayLesson: any;
}
const MainContent: React.FC<MainContentProps> = ({ setDisplayLesson }) => {
  const [lessonId, setLessonId] = React.useState(null);

  const handleClick = () => {
    setDisplayLesson(true);
    setLessonId(lessonId);
    console.log(lessonId);
  };

  React.useEffect(() => {
    console.log('hello');
    const listLessons = async () => {
      const response = await fetch(`${uri}`);
      return response.json();
    };
    listLessons();
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
          {usersSavedLessons.map((data) => {
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
