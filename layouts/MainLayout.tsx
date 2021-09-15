//importing hooks & context
import { useContext, useEffect } from 'react';
import { NavContext } from '../context';
//importing utils & types
import { disableScroll, hideNav } from '../utils';
//importing components
import Header from '../components/Header';
import Footer from '../components/Footer';

//main layout
const MainLayout: React.FC = ({ children }) => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

  useEffect(() => {
    hideNav(setIsNavOpen);
  }, [setIsNavOpen]);

  useEffect(() => {
    disableScroll(isNavOpen);
  }, [isNavOpen]);

  return (
    <main className="app__container">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
