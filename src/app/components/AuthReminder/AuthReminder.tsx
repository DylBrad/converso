import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import Button from '../Button/Button';
import flashCard from '../../../../public/flashcards/undraw_flashcards.svg';

interface AuthReminderProps {
  setDisplayReminder: any;
  setIsSignUp: any;
  setDisplay: any;
}

const AuthReminder: React.FC<AuthReminderProps> = ({
  setDisplayReminder,
  setIsSignUp,
  setDisplay,
}) => {
  const handleSignUp = () => {
    setDisplayReminder(false);
    setIsSignUp(true);
    setDisplay('AuthModal');
  };
  const handleSignIn = () => {
    setDisplayReminder(false);
    setIsSignUp(false);
    setDisplay('AuthModal');
  };
  const handleClose = () => {
    setDisplayReminder('');
  };

  return (
    <div className="disable-wrapper">
      <div className="reminder large-card">
        <div className="close-btn-wrapper">
          <Button
            fontSize={'medium'}
            bg={'bg-white'}
            txtColor={'text-offblack'}
            onClick={handleClose}
          >
            <IoClose />
          </Button>
        </div>
        <h2>
          Learn faster with
          <br />
          <span>Flash Cards!</span>
        </h2>

        <Image
          src={flashCard}
          alt="lessons"
          width={145}
          height={145}
          priority
        />

        <div className="reminder-links">
          <p>
            <span onClick={handleSignUp}>Sign up</span> to start using flash
            cards now.
          </p>
          <p className="reminder-login">
            Already a member? <span onClick={handleSignIn}>Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthReminder;
