import '@fontsource-variable/figtree';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useEffect, useState, lazy, Suspense } from 'react';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import Toggle from '@/components/Toggle';
const StarsBG = lazy(() => import('../components/StarsBG'));


export default function App({ Component, pageProps }: AppProps) {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  return (
    <>
      <SideMenu />
      <Component {...pageProps} />
        {
          !isMounted ? null : (
            <Suspense fallback={null}>
            <Toggle text="Toggle Stars" component=<StarsBG /> />
          </Suspense>
        )}
      <Footer />
      <GoogleAnalytics trackPageViews gaMeasurementId={"G-LPTSLQBQHN"} strategy="worker" />
    </>
  );
}
