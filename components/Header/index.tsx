//importing hooks & context
import { useContext } from 'react';
import { NavContext } from '../../context';

const Header: React.FC = ({ children }) => {
  const { isNavOpen } = useContext(NavContext);

  return (
    <header className={isNavOpen ? 'overlay' : ''}>
      <div className="container">{children}</div>
    </header>
  );
};

export default Header;
