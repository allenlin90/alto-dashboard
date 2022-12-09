import type { Socket } from 'net';
import { createContext } from 'react';

export const SocketContext = createContext<Socket | null>(null);
