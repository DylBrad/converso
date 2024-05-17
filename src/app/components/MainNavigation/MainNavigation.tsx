import Image from 'next/image';
import Conversations from '../../../../public/undraw_team_up_re_84ok.svg';
import AddLessons from '../../../../public/undraw_add_files_re_v09g.svg';
import AvatarMale from '../../../../public/undraw_male_avatar_g98d.svg';

interface MainNavigationProps {
  display: string;
  setDisplay: any;
}
const MainNavigation: React.FC<MainNavigationProps> = ({
  display,
  setDisplay,
}) => {
  const handleShowHome = () => {
    setDisplay('MainContent');
  };
  const handleShowFlashcardContainer = () => {
    setDisplay('FlashCardsContainer');
  };
  const handleShowProfile = () => {
    setDisplay('ProfileContainer');
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
              src={AddLessons}
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
