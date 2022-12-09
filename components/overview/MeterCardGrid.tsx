import type { Meters } from 'types';
import { useWebSocket } from 'hooks/useWebSocket';
import { SocketContext } from 'context/webSocket';

export interface MeterCardGridProps {
  meters: Meters;
}

export const MeterCardGrid: React.FC<MeterCardGridProps> = ({ meters }) => {
  // TODO: setup websocket
  const socket = useWebSocket('floorplan');
  return <SocketContext.Provider value={socket}></SocketContext.Provider>;
};

export default MeterCardGrid;
