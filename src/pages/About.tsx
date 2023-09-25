import PageLayout from '@/components/PageLayout';
import styles from '@/styles/Page.module.css';

export default function About() {

  return (
    <PageLayout pageTitle="Curtis Babin | About" pageDescription="About Curtis Babin">

        <div className={styles.centerText}>
          <h1>About</h1>
          <p>
            I have been both a professional & hobbyist web developer since 2017. 
            Professionally I work with the ASP.NET MVC framework, and at home, I employ the Node.js environment with React. 
            I enjoy creating websites and applications with a focus on the look and feel of the front-end. 
            My alma mater is the University of California, Irvine, where I earned my Bachelor of Science degree in Computer Science. 
            Since then I have also completed two online bootcamps concerning website development with a specialization in Node.js. 
            Please feel free to email me regarding inquiries: curtis [at] curtisbabin [dot] com.
          </p>
        </div>

    </PageLayout>
  )
}