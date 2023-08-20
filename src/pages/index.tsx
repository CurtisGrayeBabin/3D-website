import Head from 'next/head'
import styles from '@/styles/Home.module.css';
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import StarsBG from '../components/StarsBG';
import Toggle from '@/components/Toggle';

export default function Home() {

  // simpler way of disallowing Y scrollbar on index page
  if (typeof window !== 'undefined') {
    document.documentElement.style.overflowY = 'hidden';
  }

  return (
    <>
      <Head>
        <title>Curtis Babin | Front-End Developer</title>
        <meta name="description" content="Curtis Babin: Front-End Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shuttle.svg" />
      </Head>

      <main className={`${styles.main}`}>

        <header className="topLeft">
          <h1>Curtis Babin</h1>
          <h2>Front-End Developer &#128187;</h2>
          <h3>Based in &#128205; Orange County, California</h3>
        </header>

        <SideMenu />
        
        <Footer />
        <Toggle text="Toggle Stars" component=<StarsBG /> />
      </main>
    </>
  )
}
