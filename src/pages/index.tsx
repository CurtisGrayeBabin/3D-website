import Head from 'next/head'
import Tree from 'public/tree.svg';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome :)</title>
        <meta name="description" content="Curtis Babin: Front-End Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tree.svg" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        <header>
          <h1>Curtis Babin</h1>
          <h2>Professional Front-End Developer</h2>
        </header>

        {/*
        <Image 
          src="/tree.svg"
          width={400}
          height={400}
          alt="Blue tree"
        />
  */}
      </main>
    </>
  )
}
