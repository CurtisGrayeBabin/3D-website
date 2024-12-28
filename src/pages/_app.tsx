
import type { AppProps } from 'next/app';
import { useLayoutEffect, useState, ComponentType } from 'react';
import Footer from '@/components/Footer';
import Toggle from '@/components/Toggle';
import dynamic from 'next/dynamic';
import '@fontsource-variable/figtree';
import '@/styles/globals.css';

const StarsBG = dynamic(() => import('../components/StarsBG'), {
  loading: () => <></>,
});

export default function App({ Component, pageProps }: AppProps) {
  
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
      setIsMounted(true);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Footer />
      { isMounted && <Toggle text="Toggle Stars" component=<StarsBG /> />}
    </>
  );
}
