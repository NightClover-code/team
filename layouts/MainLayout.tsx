//importing hooks & context
import { useContext, useEffect } from 'react';
import { NavContext } from '../context';
//importing utils & types
import { disableScroll, hideNav } from '../utils';
//importing components
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutInterface {
  NavBar: React.FC;
}

//main layout
const MainLayout: React.FC<MainLayoutInterface> = ({ children, NavBar }) => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

  useEffect(() => {
    hideNav(setIsNavOpen);
  }, [setIsNavOpen]);

  useEffect(() => {
    disableScroll(isNavOpen);
  }, [isNavOpen]);

  return (
    <div className="app__container">
      <Header>
        <NavBar />
      </Header>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
