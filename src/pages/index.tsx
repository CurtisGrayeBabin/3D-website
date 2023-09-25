import PageLayout from '@/components/PageLayout';

export default function Home() {

  // simpler way of disallowing Y scrollbar on index page
  if (typeof window !== 'undefined') {
    document.documentElement.style.overflowY = 'hidden';
  }

  return (
    <PageLayout pageTitle="Curtis Babin | Front-End Developer" pageDescription="Curtis Babin: Front-End Developer">

        <header className="topLeft">
          <h1>Curtis Babin</h1>
          <h2>Front-End Developer &#128187;</h2>
          <h3>Based in &#128205; Orange County, California</h3>
        </header>

    </PageLayout>
  )
}
