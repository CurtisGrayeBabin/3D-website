import Head from 'next/head'
import styles from '@/styles/Home.module.css';
import SideMenu from '../components/SideMenu';
import StarsBG from '../components/StarsBG';

export default function Home() {

  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Curtis Babin: Front-End Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shuttle.svg" />
      </Head>

      <main className={`${styles.main}`}>

        <header>
          <h1>Curtis Babin</h1>
          <h2>Front-End Developer &#128187;</h2>
          <h3>Based in &#128205; Orange County, California</h3>
        </header>

        <SideMenu />

        <StarsBG />

      </main>
    </>
  )
}
