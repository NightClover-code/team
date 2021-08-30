import { Logo } from '../Icons';

const NavBar = () => {
  return (
    <nav>
      <div className="logo__container">
        <Logo />
        <div className="nav__list">
          <ul>
            <li>Products</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
