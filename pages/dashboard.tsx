import type { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from 'components/common/Seo';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(locale &&
        (await serverSideTranslations(locale, ['common', 'scanner']))),
    },
  };
};

export const HomePage: NextPage = () => {
  return <Seo title='Dashboard' />;
};

export default HomePage;
