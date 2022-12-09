import type { Dictionary } from 'types';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { SessionContext } from 'context/session';

export type Session = Dictionary<any> | null;

export const SessionProvider: React.FC<{
  children: React.ReactNode;
  timeout?: number;
}> = ({ children, timeout = 5000 }) => {
  const router = useRouter();
  const initRef = useRef<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout>();
  // TODO: consider using useReducer if auth object is complex
  const [auth, setAuth] = useState<Session | null>(null);

  // TODO: extract this as utils or custom hook
  // TODO: handling more cases to replace this is naive solution
  useEffect(() => {
    // TODO: may replace with useCallback
    const logout = () => {
      setAuth(null);
      router.replace('/signin');
    };

    const refreshToken = async () => {
      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        const { status, data } = await axios.post('/refresh', { refreshToken });

        if (/^2\d{2}$/g.test(`${status}`)) {
          const { newRefershToken } = data;
          localStorage.setItem('refreshToken', newRefershToken);

          return true;
        }
      }

      return false;
    };

    const validateUser = async () => {
      // TODO: replace with useQuery hook
      // TODO: intercept axios for different conditions or requirements from UI/UX
      const { status, data } = await axios.get('/auth');

      if (!/200/g.test(`${status}`) && initRef.current && !auth) {
        // logout when
        // cookie cannot be authenticated
        // auth state is cleared
        // else conditions

        const isSuccess = await refreshToken();
        if (!isSuccess) {
          logout();
        }
      } else if (!initRef.current) {
        // initiate local auth state
        setAuth(data);
        initRef.current = true;
      }

      timerRef.current = setTimeout(() => {
        validateUser();
      }, timeout);
    };

    // TODO: resume to implement validation
    // validateUser();

    return () => clearTimeout(timerRef.current);
  }, [auth, router, timeout]);

  return (
    <SessionContext.Provider value={[auth, setAuth]}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
