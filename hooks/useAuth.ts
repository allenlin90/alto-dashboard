import { useContext } from 'react';
import { SessionContext } from 'components/_app/SessionProvider';

export const useAuth = () => {
  const ctx = useContext(SessionContext);

  if (!ctx) throw new Error('useAuth must be used in SessionContext.Provider');

  return ctx;
};
