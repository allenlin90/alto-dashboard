import type { GetServerSideProps, NextPage } from 'next';
import Seo from 'components/common/Seo';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
    redirect: {
      destination: '/dashboard',
      permenant: false,
    },
  };
};

export const HomePage: NextPage = () => {
  return <Seo title='Home' />;
};

export default HomePage;
