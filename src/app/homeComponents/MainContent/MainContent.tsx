import Thumbnail from '../Thumbnail/Thumbnail';

const usersSavedLessons = [
  {
    thumb:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Arriving at the airport',
  },
  {
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
  {
    thumb:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Arriving at the airport',
  },
  {
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
  {
    thumb:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Arriving at the airport',
  },
  {
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
  {
    thumb:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Arriving at the airport',
  },
  {
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
  {
    thumb:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Arriving at the airport',
  },
  {
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
  {
    thumb:
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Arriving at the airport',
  },
  {
    thumb:
      'https://images.unsplash.com/photo-1526112455121-272736767b9e?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ordering some food',
  },
];
const MainContent = () => {
  return (
    <>
      <div className="main-content">
        <ul className="thumb-list">
          {usersSavedLessons.map((data) => {
            return (
              <Thumbnail
                key={'post-id'}
                title={data.title}
                thumb={data.thumb}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MainContent;
