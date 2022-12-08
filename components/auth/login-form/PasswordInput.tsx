// import { useFormContext, Controller } from 'react-hook-form';

export interface PasswordInputProps {
  formId: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ formId }) => {
  // TODO: use Controller from react-hook-form

  return (
    <label htmlFor='password' form={formId}>
      <input id='password' name='password' type='password' />
    </label>
  );
};

export default PasswordInput;
