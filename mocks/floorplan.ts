import type { Meters } from 'types';

export const meters: Meters = {
  thresholds: {
    ch_setpoint: 569.79,
    demand_setpoint: 100, // percentage
    part_load_chiller: 63.61, // percentage
  },
  entities: [
    {
      id: 'residence',
      btu: 569.79,
      temp_chs: 569.79,
    },
    {
      id: 'office-1',
      btu: 569.79,
      temp_chs: 569.79,
    },
    {
      id: 'office-2',
      btu: 569.79,
      temp_chs: 569.79,
    },
    {
      id: 'plaza',
      btu: 569.79,
      temp_chs: 569.79,
    },
  ],
  efficiency: {
    chiller: { kpi: 0.6, actual: 0.641 },
    pump: { kpi: 0.22, actual: 0.22 },
    cts: { kpi: 0.03, actual: 0.029 },
    total: { kpi: 0.85, actual: 0.971 },
  },
};
