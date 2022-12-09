import type { NotificationsProps } from './top-nav/Notifications';
import UserDrawer from './top-nav/UserDrawer';
import LangSelector from './top-nav/LangSelector';
import Notifications from './top-nav/Notifications';

import dynamic from 'next/dynamic';
const Timer = dynamic(() => import('components/common/Timer'), { ssr: false });

export interface DashboardTopNavProps extends NotificationsProps {}

export const DashboardTopNav: React.FC<DashboardTopNavProps> = ({
  notifications,
}) => {
  return (
    // TODO: define layout with flexbox or grid
    <div>
      {/* this may be replaced with image */}
      <div>Overview</div>
      <Timer />
      <LangSelector />
      <Notifications notifications={notifications} />
      <UserDrawer />
    </div>
  );
};

export default DashboardTopNav;
