//importing hooks
import { useEffect } from 'react';
//importing animation library & styles
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/css/default.css';
//importing components & types
import type { AppProps } from 'next/app';
import { NavProvider } from '../context';
import { ApolloClient, InMemoryCache } from '@apollo/client';

//apollo client init
export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SERVER_URL,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
    });
  }, []);

  return (
    <NavProvider>
      <Component {...pageProps} />
    </NavProvider>
  );
}
export default MyApp;
