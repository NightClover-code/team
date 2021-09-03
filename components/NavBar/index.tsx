//importing components
import Link from 'next/link';
import Logo from '../Logo';

const NavBar = () => {
  return (
    <nav>
      <Link href="/" passHref>
        <div className="logo__container">
          <Logo />
        </div>
      </Link>
      <div className="nav__items">
        <div className="nav__list">
          <ul>
            <li>Products</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
        <button className="primary__button">Get Access</button>
      </div>
    </nav>
  );
};

export default NavBar;
