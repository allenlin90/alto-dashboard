import type { GetServerSideProps } from 'next';
import type { NextPageWithLayout } from 'pages/_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from 'components/common/Seo';
import Overview from 'components/overview/Overview';
import DashboardLayout from 'components/layout/dashboard/DashboardLayout';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  // TODO: fetch required data from API services
  const notifications = 2;

  return {
    props: {
      notifications,
      ...(locale &&
        (await serverSideTranslations(locale, ['common', 'overview']))),
    },
  };
};

export const OverviewPage: NextPageWithLayout = () => {
  return (
    <>
      <Seo title='Dashboard' />
      <Overview />
    </>
  );
};

OverviewPage.getLayout = (page) => {
  return <DashboardLayout {...page.props}>{page}</DashboardLayout>;
};

export default OverviewPage;
