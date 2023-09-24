import Head from 'next/head';
import styles from '@/styles/Page.module.css';
import SideMenu from '../components/SideMenu';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import StarsBG from '../components/StarsBG';
import Toggle from '@/components/Toggle';

export default function Blog() {

  return (
    <>
      <Head>
        <title>Curtis Babin | Blog</title>
        <meta name="description" content="Blog by Curtis Babin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shuttle.svg" />
      </Head>

      <main className={`${styles.main}`}>
        <div className={`${styles.center}`}>
            <ComingSoon />
        </div>
        <SideMenu />
        <Footer />
        <Toggle text="Toggle Stars" component=<StarsBG /> />
      </main>
    </>
  )
}
