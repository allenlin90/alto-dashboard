import type { Dispatch, SetStateAction } from 'react';
import { Session } from 'components/_app/SessionProvider';
import { createContext } from 'react';

export const SessionContext = createContext<
  [Session, Dispatch<SetStateAction<Session>>] | null
>(null);
