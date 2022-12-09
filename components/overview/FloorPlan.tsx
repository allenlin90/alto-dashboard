import { useWebSocket } from 'hooks/useWebSocket';
import { SocketContext } from 'context/webSocket';

export interface FloorplanProps {
  floorplan: any;
}

export const Floorplan: React.FC<FloorplanProps> = ({ floorplan }) => {
  // TODO: setup websocket
  const socket = useWebSocket('floorplan');

  return <SocketContext.Provider value={socket}></SocketContext.Provider>;
};

export default Floorplan;
