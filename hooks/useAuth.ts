import { useContext } from 'react';
import { SessionContext } from 'context/session';

export const useAuth = () => {
  const ctx = useContext(SessionContext);

  if (!ctx) throw new Error('useAuth must be used in SessionContext.Provider');

  return ctx;
};
