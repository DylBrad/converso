import Image from 'next/image';
import Conversations from '../../public/undraw_team_up_re_84ok.svg';
import AddLessons from '../../public/undraw_add_files_re_v09g.svg';
import AvatarMale from '../../public/undraw_male_avatar_g98d.svg';

const MainNavigation = () => {
  return (
    <div className="nav-container bottom">
      <nav className="navigation">
        <ul>
          <div>
            <Image
              src={Conversations}
              alt="lessons"
              width={45}
              height={45}
              priority
            ></Image>
          </div>
          <div>
            <Image
              src={AddLessons}
              alt="lessons"
              width={45}
              height={45}
              priority
            ></Image>
          </div>
          <div>
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
