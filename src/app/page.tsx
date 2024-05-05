import MainNavigation from './components/MainNavigation/MainNavigation';
import MainContent from './homeComponents/MainContent/MainContent';

export default function Home() {
  return (
    <main>
      <div className="main-content-container">
        <div className="home-header">
          <div>
            <span>Conversations</span>
          </div>
          <div className="inactive">
            <span>Cards</span>
          </div>
        </div>
        <MainContent />
      </div>
      <MainNavigation />
    </main>
  );
}
