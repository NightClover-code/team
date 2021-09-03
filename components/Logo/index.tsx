import { LogoIcon } from '../Icons';

export interface LogoProps {
  primaryColor: string;
  secondaryColor: string;
}

const Logo: React.FC<LogoProps> = props => {
  return (
    <div className="logo__container">
      <LogoIcon {...props} />
    </div>
  );
};

export default Logo;
