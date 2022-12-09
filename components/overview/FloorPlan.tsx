import DataLayer from './floorplan/DataLayer';

export interface FloorplanProps {
  floorplan: any;
}

export const Floorplan: React.FC<FloorplanProps> = ({ floorplan }) => {
  return <DataLayer initData={floorplan}>{null}</DataLayer>;
};

export default Floorplan;
