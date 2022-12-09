export interface IEfficiency {
  kpi: number;
  actual: number;
}

export enum EfficiencyParams {
  chiller = 'chiller',
  pump = 'pump',
  cts = 'cts',
}

export interface MonitoredEntity {
  id: string;
  btu: number;
  temp_chs: number;
}

export interface Meters {
  thresholds: {
    ch_setpoint: number;
    demand_setpoint: number;
    part_load_chiller: number;
  };
  entities: MonitoredEntity[];
  efficiency: {
    [key in EfficiencyParams | 'total']: Efficiency;
  };
}
