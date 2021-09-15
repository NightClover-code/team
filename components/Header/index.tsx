//importing hooks & context
import { useContext } from 'react';
import { NavContext } from '../../context';
//imoprting components
import NavBar from '../NavBar';

const Header = () => {
  const { isNavOpen } = useContext(NavContext);

  return (
    <header className={isNavOpen ? 'overlay' : ''}>
      <div className="container">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
