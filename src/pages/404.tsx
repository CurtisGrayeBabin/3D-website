import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import styles from '@/styles/Page.module.css';

export default function About() {

  // simpler way of disallowing Y scrollbar on index page
  if (typeof window !== 'undefined') {
    document.documentElement.style.overflowY = 'hidden';
  }

  return (
    <PageLayout pageTitle="Curtis Babin | 404" pageDescription="Page Not Found">

        <div className={`${styles.center}`}>
            <h1>404</h1> 
            <h2>Not Found!</h2>
            <Link href="/">Go Home</Link>
        </div>

    </PageLayout>
  )
}