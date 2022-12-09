import type {
  DashboardTopNavProps,
  DashboardSideNavProps,
} from 'components/layout/dashboard/components';
import {
  DashboardSideNav,
  DashboardMain,
  DashboardTopNav,
} from 'components/layout/dashboard/components';

type LayoutProps = DashboardTopNavProps & DashboardSideNavProps;

interface DashboardLayoutProps extends LayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  imgSrc,
  notifications = 0,
}) => {
  return (
    <>
      <DashboardSideNav imgSrc={imgSrc} />
      <DashboardMain>
        <DashboardTopNav notifications={notifications} />
        {children}
      </DashboardMain>
    </>
  );
};

export default DashboardLayout;
