import type { MeterCardGridProps } from './MeterCardGrid';
import type { FloorplanProps } from './FloorPlan';
import Floorplan from './FloorPlan';
import MeterCardGrid from './MeterCardGrid';

export type OverviewProps = MeterCardGridProps & FloorplanProps;

export const Overview: React.FC<OverviewProps> = ({ meters, floorplan }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* meter card grid overlays floorplan */}
      <div style={{ position: 'absolute', left: 0, top: 0, zIndex: 1 }}>
        <MeterCardGrid meters={meters} />
      </div>
      {/* floorplan is below meter card grid */}
      <div style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}>
        <Floorplan floorplan={floorplan} />
      </div>
    </div>
  );
};

export default Overview;
