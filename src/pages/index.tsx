import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import R3fDemo from '../components/fiberTest';


export default function Home() {

  return (
    <>
      <Head>
        <title>Welcome :)</title>
        <meta name="description" content="Curtis Babin: Front-End Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shuttle.svg" />
      </Head>
      <main className={`${styles.main}`}>

        <header>
          <h1>Curtis Babin</h1>
          <h2>Front-End Developer</h2>
        </header>

        <div style={{height: '100vh', width: '100%'}}>
          <R3fDemo />
        </div>

      </main>
    </>
  )
}
