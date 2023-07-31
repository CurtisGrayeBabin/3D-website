import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

/* hides vertical scrollbar on mobile for index page */
const handleOverflowY = (pathname: string) => {
  if (pathname === '/') {
    document.documentElement.style.overflowY = 'hidden';
  } else {
    document.documentElement.style.overflowY = 'auto';
  }
};

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    handleOverflowY(router.pathname);

    const handleRouteChange = (url: string) => {
      handleOverflowY(url);
    };

    // Set up event listener to handle route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the effect when the component unmounts
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.pathname]);

  return <Component {...pageProps} />
}
