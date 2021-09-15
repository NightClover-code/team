import '../styles/css/default.css';
import type { AppProps } from 'next/app';
import MainLayout from '../layouts/MainLayout';
import { NavProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </NavProvider>
  );
}
export default MyApp;
