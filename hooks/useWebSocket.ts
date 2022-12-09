import type { Socket } from 'net';

export const useWebSocket = (_pointer: string): Socket | null => {
  // pointer to map the endpoint which the client can set websocket connection with
  // TODO: setup socket connection
  return {} as Socket;
};

export default useWebSocket;
