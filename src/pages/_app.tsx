import '@fontsource-variable/figtree';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useEffect, useState, lazy, Suspense } from 'react';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import Toggle from '@/components/Toggle';
import dynamic from 'next/dynamic';
import { Partytown } from '@builder.io/partytown/react';

//const StarsBG = lazy(() => import('../components/StarsBG'));
const StarsBG = dynamic(() => import('../components/StarsBG'), {
  loading: () => null,
});


export default function App({ Component, pageProps }: AppProps) {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  return (
    <>
      <SideMenu />
      <Component {...pageProps} />
      <Footer />
        {
          !isMounted ? null : (
            <Suspense fallback={null}>
            <Toggle text="Toggle Stars" component=<StarsBG /> />
          </Suspense>
        )}
      <Partytown forward={['dataLayer.push']} />
      <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-LPTSLQBQHN" defer />
    </>
  );
}
