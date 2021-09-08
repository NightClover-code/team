import { CSSProperties } from 'react';

interface FormInputProps {
  style?: CSSProperties;
}

const FormInput: React.FC<FormInputProps> = ({ children, style }) => {
  return (
    <div className="form__input">
      <input placeholder="Email" type="email" style={style} />
      {children}
    </div>
  );
};

export default FormInput;
