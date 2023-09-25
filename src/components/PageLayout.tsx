import Head from 'next/head';
import styles from '@/styles/Page.module.css';
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import StarsBG from '../components/StarsBG';
import Toggle from '@/components/Toggle';

interface PageLayoutProps {
    pageTitle: string;
    pageDescription: string;
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ pageTitle, pageDescription, children }) => {

  // simpler way of disallowing Y scrollbar on index page
  /*
  if (typeof window !== 'undefined') {
    document.documentElement.style.overflowY = 'hidden';
  }
  */

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
        <Footer />
        <Toggle text="Toggle Stars" component=<StarsBG /> />
      </main>
    </>
  )
}

export default PageLayout;