import Image from 'next/image';
import { Logo } from '../Icons';

const NavBar = () => {
  return (
    <nav>
      <div className="logo__container">
        <Logo />
      </div>
    </nav>
  );
};

export default NavBar;
