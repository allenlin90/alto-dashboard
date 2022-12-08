// import { useFormContext, Controller } from 'react-hook-form';

export interface UsernameProps {
  formId: string;
}

export const UsernameInput: React.FC<UsernameProps> = ({ formId }) => {
  // TODO: use Controller from react-hook-form

  return (
    <label htmlFor='username' form={formId}>
      <input id='username' name='username' type='string' />
    </label>
  );
};

export default UsernameInput;
