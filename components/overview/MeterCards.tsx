import type { Meters } from 'types';
import DataLayer from './meter-card-grid/DataLayer';

export interface MeterCardsProps {
  meters: Meters;
}

export const MeterCards: React.FC<MeterCardsProps> = ({ meters }) => {
  return <DataLayer initData={meters}>{null}</DataLayer>;
};

export default MeterCards;
