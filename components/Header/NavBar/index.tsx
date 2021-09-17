//importing hooks & context
import { useContext } from 'react';
import { NavContext } from '../../../context';
//importing components
import { CloseIcon, MenuIcon } from '../../Icons';
import Logo from '../../Logo';
import Link from 'next/link';

const NavBar = () => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

  return (
    <nav>
      <div className="logo__container">
        <Logo />
      </div>
      <div className={isNavOpen ? 'mobile__nav' : 'desktop__nav'}>
        <div className="nav__list">
          <ul>
            <li className="products">Products</li>
            <li>Services</li>
            <Link href="/blog" passHref>
              <li className="special">Blog</li>
            </Link>
            <li>Login</li>
          </ul>
        </div>
        <button className="primary__button">Get Access</button>
      </div>
      <div
        className="menu__icon__container"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </nav>
  );
};

export default NavBar;
