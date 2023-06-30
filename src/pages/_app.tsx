import { JSX } from 'react';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';

import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
