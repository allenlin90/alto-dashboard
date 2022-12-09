import { useContext } from 'react';
import { SocketContext } from 'context/webSocket';

export const useWebSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export default useWebSocket;
