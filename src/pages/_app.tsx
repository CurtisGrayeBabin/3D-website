import '@fontsource-variable/figtree';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useEffect, useState, lazy, Suspense } from 'react';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import Toggle from '@/components/Toggle';
import dynamic from 'next/dynamic'

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
      <GoogleAnalytics trackPageViews gaMeasurementId={"G-LPTSLQBQHN"} strategy="afterInteractive" />
    </>
  );
}
