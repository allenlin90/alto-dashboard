import axios from 'axios';
import { useFormContext } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import UsernameInput from 'components/auth/login-form/UsernameInput';
import PasswordInput from 'components/auth/login-form/PasswordInput';

export const Login: React.FC = () => {
  const [, setAuth] = useAuth();
  const { handleSubmit, setError } = useFormContext();

  const onSubmit = async ({ username, password }: any) => {
    const { status, data } = await axios.post('/signin', {
      username,
      password,
    });
    if (/^4\d{2}$/g.test(`${status}`)) {
      setError('login_failed', {
        type: 'login_failure',
        message: 'invalid username or password',
      });
    } else if (/^2\d{2}$/g.test(`${status}`)) {
      // TODO: initgrating with next-auth if it's used
      setAuth(data);
    }
  };

  const formId = 'login_form';

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <UsernameInput formId={formId} />
      <PasswordInput formId={formId} />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
