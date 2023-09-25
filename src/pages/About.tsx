import PageLayout from '@/components/PageLayout';
import styles from '@/styles/Page.module.css';

export default function About() {

  return (
    <PageLayout pageTitle="Curtis Babin | About" pageDescription="About Curtis Babin">

        <div className={styles.centerText}>
          <h1>About</h1>
          <p>
          Hi, I am Curtis, a front-end software developer with over six years of professional experience. 
          I hold a Bachelor of Science in Computer Science from UC Irvine and earned my Full Stack JavaScript Developer Nanodegree from Udacity.
          My experience and training have allowed me to build a strong foundation in front-end development, enabling me to create high-quality websites and single-page applications. 
          In addition to being the lead developer, I now supervise software development for California Pizza Kitchen.
          </p>
          <br />
          <p>
          As a developer, I am passionate about staying up-to-date with the latest technologies and trends in the industry. 
          I am constantly expanding my skill set and exploring new ways to improve my work. 
          My expertise includes proficiency in programming languages like C# and JavaScript, libraries like React, and frameworks like ASP.NET MVC, Gatsby, and Next.js.
          </p>
        </div>

    </PageLayout>
  )
}