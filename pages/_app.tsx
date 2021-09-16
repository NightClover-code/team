//importing hooks
import { useEffect } from 'react';
//importing animation library & styles
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/css/default.css';
//importing components & types
import type { AppProps } from 'next/app';
import MainLayout from '../layouts/MainLayout';
import { NavProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
    });
  }, []);

  return (
    <NavProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </NavProvider>
  );
}
export default MyApp;
