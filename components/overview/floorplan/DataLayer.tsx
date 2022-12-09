import { SocketContext } from 'context/webSocket';
import { useConnectSocket } from 'hooks/useConnectSocket';

// Data layer for floorplan is separated from meter-card-grid
export const DataLayer: React.FC<{
  children: React.ReactNode;
  initData?: any;
}> = ({ children }) => {
  // TODO: setup websocket
  // TODO: connecting IDB or handle data with business logic
  const socket = useConnectSocket('floorplan');

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default DataLayer;
