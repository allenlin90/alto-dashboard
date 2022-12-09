import type { GetServerSideProps } from 'next';
import type { NextPageWithLayout } from 'pages/_app';
import type { OverviewProps } from 'components/overview/Overview';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from 'components/common/Seo';
import Overview from 'components/overview/Overview';
import DashboardLayout from 'components/layout/dashboard/DashboardLayout';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  // TODO: remove mocks and fetch required data from API services
  const notifications = 2;
  const floorplan: any = {};
  const { meters } = await import('mocks/floorplan');

  return {
    props: {
      notifications,
      floorplan,
      meters,
      ...(locale &&
        (await serverSideTranslations(locale, ['common', 'overview']))),
    },
  };
};

export const OverviewPage: NextPageWithLayout<OverviewProps> = ({
  meters,
  floorplan,
}) => {
  return (
    <>
      <Seo title='Dashboard' />
      <Overview meters={meters} floorplan={floorplan} />
    </>
  );
};

OverviewPage.getLayout = (page) => {
  return <DashboardLayout {...page.props}>{page}</DashboardLayout>;
};

export default OverviewPage;
