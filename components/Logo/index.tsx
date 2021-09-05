//importing components
import { LogoIcon } from '../Icons';
import Link from 'next/link';

export interface LogoProps {
  primaryColor?: string;
  secondaryColor?: string;
}

const Logo: React.FC<LogoProps> = props => {
  return (
    <div className="logo__container">
      <Link href="/" passHref>
        <LogoIcon {...props} />
      </Link>
    </div>
  );
};

export default Logo;
