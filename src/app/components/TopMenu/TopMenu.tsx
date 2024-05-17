interface TopMenuProps {
  display: string;
  setDisplay: any;
}
const TopMenu: React.FC<TopMenuProps> = ({ display, setDisplay }) => {
  const handleShowHome = () => {
    setDisplay('MainContent');
  };
  const handleShowFlashcardContainer = () => {
    setDisplay('FlashCardsContainer');
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
