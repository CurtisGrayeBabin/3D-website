import Head from 'next/head';
import styles from '@/styles/Page.module.css';

interface PageLayoutProps {
    pageTitle: string;
    pageDescription: string;
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ pageTitle, pageDescription, children }) => {

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:site_name" content="Curtis Babin" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#000" />
        <meta name="description" content={ pageDescription } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shuttle.svg" />
      </Head>

      <main className={`${styles.main}`}>
        {children}
      </main>
    </>
  )
}

export default PageLayout;