import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export default function Home() {

  // simpler way of disallowing Y scrollbar on index page
  if (typeof window !== 'undefined') {
    document.documentElement.style.overflowY = 'hidden';
  }

  return (
    <PageLayout pageTitle="Home" pageDescription="Homepage for Curtis Babin">

        <header className="topLeft">
          <h1>Curtis Babin</h1>
          <h2>Cloud DevOps <br />& Front-end Developer &#128187;</h2>
          <h3>Based in &#128205; Orange County, CA</h3>
          {/*<h4>Read my blog <Link href="/blog">here!</Link> &#128216;</h4>*/}
          <h4>Connect on <a href="https://linkedin.com/in/curtisbabin/" target="_" rel="noopener noreferrer" aria-label="LinkedIn profile page - link opens in a new tab">LinkedIn.</a></h4>
        </header>

    </PageLayout>
  )
}
