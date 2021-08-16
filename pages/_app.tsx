import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'tachyons';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
export default MyApp;
