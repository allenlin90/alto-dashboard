import type { GetServerSideProps } from 'next';
import type { NextPageWithLayout } from 'pages/_app';
import { isLoggedIn } from 'utils/auth';
import { useForm, FormProvider } from 'react-hook-form';
import Seo from 'components/common/Seo';
import Login from 'components/auth/Login';
import PortfolioLayout from 'components/layout/auth/PortfolioLayout';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // check if user has logged in
  if (await isLoggedIn(req.cookies)) {
    return {
      props: {},
      redirect: {
        destination: '/dashboard',
      },
    };
  }

  return {
    props: {},
  };
};

export const LoginPage: NextPageWithLayout = () => {
  const methods = useForm<any>();

  return (
    <>
      <Seo title='Login' />
      <FormProvider {...methods}>
        <Login />
      </FormProvider>
    </>
  );
};

LoginPage.getLayout = (page) => {
  return <PortfolioLayout {...page.props}>{page}</PortfolioLayout>;
};

export default LoginPage;
