//importing components
import { LogoIcon } from '../Icons';
import Link from 'next/link';

export interface LogoProps {
  primaryColor?: string;
  secondaryColor?: string;
}

const Logo: React.FC<LogoProps> = props => {
  return (
    <Link href="/" passHref>
      <div className="logo__container">
        <LogoIcon {...props} />
      </div>
    </Link>
  );
};

export default Logo;
