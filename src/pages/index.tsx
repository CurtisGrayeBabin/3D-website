import PageLayout from '@/components/PageLayout';

export default function Home() {

  // simpler way of disallowing Y scrollbar on index page
  if (typeof window !== 'undefined') {
    document.documentElement.style.overflowY = 'hidden';
  }

  return (
    <PageLayout pageTitle="Curtis Babin" pageDescription="Curtis Babin: Front-end Developer">

        <header className="topLeft">
          <h1>Curtis Babin</h1>
          <h2>Front-end Developer &#128187;</h2>
          <h3>Based in &#128205; Orange County, California</h3>
          <h4>Connect on <a href="https://linkedin.com/in/curtisbabin/" target="_" rel="noopener noreferrer" aria-label="LinkedIn profile page - link opens in a new tab">LinkedIn</a></h4>
        </header>

    </PageLayout>
  )
}
