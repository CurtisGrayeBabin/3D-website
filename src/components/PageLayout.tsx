import Head from 'next/head';
import styles from '@/styles/Page.module.css';
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import Toggle from '@/components/Toggle';
import { useEffect, useState, lazy, Suspense } from 'react';
//import StarsBG from '../components/StarsBG';
const StarsBG = lazy(() => import('../components/StarsBG'));

interface PageLayoutProps {
    pageTitle: string;
    pageDescription: string;
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ pageTitle, pageDescription, children }) => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={ pageDescription } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shuttle.svg" />
      </Head>

      <main className={`${styles.main}`}>
        <SideMenu />
        {children}
        {
          !isMounted ? null : (
          <Suspense fallback={null}>
            <Toggle text="Toggle Stars" component=<StarsBG /> />
          </Suspense>
        )}
        <Footer />
      </main>
    </>
  )
}

export default PageLayout;