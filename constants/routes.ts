import type { Link } from 'types';

export const routes: Link[] = [
  {
    id: 'plant',
    title: 'Plant',
    href: '/overview',
  },
  {
    id: 'power-meter',
    title: 'Power meter',
    href: '/power-meter',
  },
  {
    id: 'btu-meter',
    title: 'BTU meter',
    href: '/btu-meter',
  },
  {
    id: 'report',
    title: 'Report',
    href: '/report',
    links: [], // different types of reports
  },
  {
    id: 'setting',
    title: 'Setting',
    href: '/setting',
  },
];
