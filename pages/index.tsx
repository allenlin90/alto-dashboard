import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Seo from 'components/common/Seo';

export const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/overview');
  }, [router]);

  return <Seo title='Home' />;
};

export default HomePage;
