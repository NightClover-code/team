import { Logo } from '../Icons';

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
    </nav>
  );
};

export default NavBar;
