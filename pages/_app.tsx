import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

export type NextPageWithLayout<T = unknown> = NextPage<T> & {
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default appWithTranslation(App);
