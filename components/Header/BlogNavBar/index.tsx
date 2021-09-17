//importing hooks & context
import { useContext } from 'react';
import { NavContext } from '../../../context';
//importing utils
import { blogLogoConfig } from '../../../utils';
//importing components
import { CloseIcon, MenuIcon } from '../../Icons';
import Logo from '../../Logo';

const BlogNavBar = () => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

  return (
    <nav>
      <div className="logo__container">
        <Logo {...(!isNavOpen ? blogLogoConfig : {})} />
      </div>
      <div className={isNavOpen ? 'mobile__nav' : 'desktop__nav'}>
        <div className="nav__list">
          <ul className="blog__ul">
            <li className="products">Products</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
        <button className="secondary__button">Get Access</button>
      </div>
      <div
        className="menu__icon__container"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <CloseIcon /> : <MenuIcon color="var(--dark-blue)" />}
      </div>
    </nav>
  );
};

export default BlogNavBar;
