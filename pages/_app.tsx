import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import SessionManager from 'components/_app/SessionProvider';

export type NextPageWithLayout<T = unknown> = NextPage<T> & {
  getLayout?: (page: React.ReactElement & { props: T }) => React.ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionManager>{getLayout(<Component {...pageProps} />)}</SessionManager>
  );
}

export default appWithTranslation(App);
