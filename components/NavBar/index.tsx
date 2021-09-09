//importing components
import { MenuIcon } from '../Icons';
import Logo from '../Logo';

const NavBar = () => {
  return (
    <nav>
      <div className="logo__container">
        <Logo />
      </div>
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
      <div className="menu__icon__container">
        <MenuIcon />
      </div>
    </nav>
  );
};

export default NavBar;
