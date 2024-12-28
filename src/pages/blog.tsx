import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import styles from '@/styles/Page.module.css';

export default function Blog() {

  return (
    <PageLayout pageTitle="Blog" pageDescription="Curtis Babin's Blog">

        <header className="topLeft">
            <h1>Blog</h1> 
            <h2><Link href="/">Go Home</Link></h2>
        </header>

    </PageLayout>
  )
}