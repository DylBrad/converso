import TopMenu from '@/app/components/TopMenu/TopMenu';

interface FlashCardsContainerProps {
  display: string;
  setDisplay: any;
}

const FlashCardsContainer: React.FC<FlashCardsContainerProps> = ({
  display,
  setDisplay,
}) => {
  return (
    <>
      <TopMenu display={display} setDisplay={setDisplay} />
      <div className="main-content">
        <h1>FLASHCARDS</h1>
      </div>
    </>
  );
};

export default FlashCardsContainer;
