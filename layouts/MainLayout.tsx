//importing hooks & context
import { CSSProperties, useContext, useEffect } from 'react';
import { NavContext } from '../context';
//importing utils & types
import { disableScroll, hideNav } from '../utils';
//importing components
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutInterface {
  NavBar: React.FC<any>;
  mainLayoutStyle?: CSSProperties;
}

//main layout
const MainLayout: React.FC<MainLayoutInterface> = ({
  children,
  NavBar,
  mainLayoutStyle,
}) => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

  useEffect(() => {
    hideNav(setIsNavOpen);
  }, [setIsNavOpen]);

  useEffect(() => {
    disableScroll(isNavOpen);
  }, [isNavOpen]);

  return (
    <div className="app__container" style={mainLayoutStyle}>
      <Header>
        <NavBar />
      </Header>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
