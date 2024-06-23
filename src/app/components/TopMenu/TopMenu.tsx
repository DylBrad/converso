interface TopMenuProps {
  display: string;
  setDisplay: any;
  setDisplayReminder: any;
  authToken: string;
}
const TopMenu: React.FC<TopMenuProps> = ({
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

  return (
    <>
      <div className="home-header">
        <div
          className={display === 'MainContent' ? 'active' : ''}
          onClick={handleShowHome}
        >
          <span>Conversations</span>
        </div>
        <div
          className={display === 'FlashCardsContainer' ? 'active' : ''}
          onClick={handleShowFlashcardContainer}
        >
          <span>Cards</span>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
