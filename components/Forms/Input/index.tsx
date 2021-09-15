//importing hooks & types
import { CSSProperties, useContext } from 'react';
import { NavContext } from '../../../context';

interface FormInputProps {
  style?: CSSProperties;
}

const FormInput: React.FC<FormInputProps> = ({ children, style }) => {
  const { isNavOpen } = useContext(NavContext);

  return (
    <div className="form__input">
      <input
        placeholder={isNavOpen ? '' : 'Email'}
        type="email"
        style={style}
      />
      {children}
    </div>
  );
};

export default FormInput;
