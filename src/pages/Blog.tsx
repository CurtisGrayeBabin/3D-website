import PageLayout from '@/components/PageLayout';
import ComingSoon from '@/components/ComingSoon';

export default function About() {

  // simpler way of disallowing Y scrollbar on index page
  if (typeof window !== 'undefined') {
    document.documentElement.style.overflowY = 'hidden';
  }

  return (
    <PageLayout pageTitle="Curtis Babin | Blog" pageDescription="Blog by Curtis Babin">

        <ComingSoon />

    </PageLayout>
  )
}