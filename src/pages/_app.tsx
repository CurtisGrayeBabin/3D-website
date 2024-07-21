import '@fontsource-variable/figtree';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState, ComponentType } from 'react';
import Footer from '@/components/Footer';
import Toggle from '@/components/Toggle';
import dynamic from 'next/dynamic';


const StarsBG = dynamic(() => import('../components/StarsBG'), {
  loading: () => <></>,
});


export default function App({ Component, pageProps }: AppProps) {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Footer />
      {
        isMounted ? <Toggle text="Toggle Stars" component=<StarsBG /> /> : null
      } 
    </>
  );
}
