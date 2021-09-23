//importing hooks & context
import { useContext } from 'react';
import { NavContext } from '../../context';
//importing components
import { LogoIcon } from '../Icons';
import Link from 'next/link';

export interface LogoProps {
  primaryColor?: string;
  secondaryColor?: string;
}

const Logo: React.FC<LogoProps> = props => {
  const { setIsNavOpen } = useContext(NavContext);

  return (
    <Link href="/" passHref>
      <div className="logo__container" onClick={() => setIsNavOpen(false)}>
        <LogoIcon {...props} />
      </div>
    </Link>
  );
};

export default Logo;
