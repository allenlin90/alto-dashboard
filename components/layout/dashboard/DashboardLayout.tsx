import type {
  DashboardTopNavProps,
  DashboardSideNavProps,
} from 'components/layout/dashboard/components';
import {
  DashboardSideNav,
  DashboardMain,
  DashboardTopNav,
  DashboardFooter,
} from 'components/layout/dashboard/components';

type LayoutProps = DashboardTopNavProps & DashboardSideNavProps;

interface DashboardLayoutProps extends LayoutProps {
  children: React.ReactNode;
}

// TODO: consider using context to prevent prop drilling (notification in this case)
export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  imgSrc,
  notifications = [],
}) => {
  return (
    <>
      <DashboardSideNav imgSrc={imgSrc} />
      <DashboardMain>
        <DashboardTopNav notifications={notifications} />
        {children}
        <DashboardFooter />
      </DashboardMain>
    </>
  );
};

export default DashboardLayout;
