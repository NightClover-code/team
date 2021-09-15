//importing context
import { createContext, useState } from 'react';
//importing types
import { BooleanState } from '../interfaces';

//context
export const NavContext = createContext<BooleanState>({
  isNavOpen: false,
  setIsNavOpen: () => '',
});

export const NavProvider: React.FC = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </NavContext.Provider>
  );
};
