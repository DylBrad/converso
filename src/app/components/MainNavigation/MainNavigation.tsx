import Image from 'next/image';
import Conversations from '../../../../public/undraw_team_up_re_84ok.svg';
import FlashCards from '../../../../public/undraw_add_files_re_v09g.svg';
import AvatarMale from '../../../../public/undraw_male_avatar_g98d.svg';

interface MainNavigationProps {
  display: string;
  setDisplay: any;
  setDisplayReminder: any;
  authToken: any;
}
const MainNavigation: React.FC<MainNavigationProps> = ({
  display,
  setDisplay,
  setDisplayReminder,
  authToken,
}) => {
  const handleShowHome = () => {
    setDisplay('MainContent');
  };
  const handleShowFlashcardContainer = () => {
    if (authToken) {
      setDisplay('FlashCardsContainer');
    } else {
      setDisplayReminder('AuthReminder');
    }
  };
  const handleShowProfile = () => {
    if (authToken) {
      setDisplay('ProfileContainer');
    } else {
      alert('Log in');
    }
  };

  return (
    <div className="nav-container bottom">
      <nav className="navigation">
        <ul>
          <div
            className={`${
              display === 'MainContent' ? ' nav-button active' : 'nav-button'
            }`}
            onClick={handleShowHome}
          >
            <Image
              src={Conversations}
              alt="lessons"
              width={45}
              height={45}
              priority
            ></Image>
          </div>
          <div
            className={`${
              display === 'FlashCardsContainer'
                ? ' nav-button active'
                : 'nav-button'
            }`}
            onClick={handleShowFlashcardContainer}
          >
            <Image
              src={FlashCards}
              alt="lessons"
              width={45}
              height={45}
              priority
            ></Image>
          </div>
          <div
            className={`${
              display === 'ProfileContainer'
                ? ' nav-button active'
                : 'nav-button'
            }`}
            onClick={handleShowProfile}
          >
            <Image
              src={AvatarMale}
              alt="lessons"
              width={45}
              height={45}
              priority
            ></Image>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
