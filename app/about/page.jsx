import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className>About Me</h1>
      <p>
        I&apos;m an experienced senior software engineer with a demonstrated
        history of working with modern web technologies. I&apos;m passionate
        about creating effective solutions for modern problems.
      </p>
      <h2>Work Experience</h2>
      <h3>Vectra Business Technologies</h3>
      <p>
        <strong>Senior Software Developer</strong>
      </p>
      <p>
        <i>April 2021 - PRESENT</i>
      </p>
      <p>Senior software developer specializing in web frontend development.</p>
      <h3>Comune.IT</h3>
      <p>
        <strong>Development Team Lead</strong>
      </p>
      <p>
        <i>July 2020 - March 2021</i>
      </p>
      <p>
        Development team lead responsible for managing the development team and
        various software projects.
      </p>
      <h3>Comune.IT</h3>
      <p>
        <strong>Full stack Developer</strong>
      </p>
      <p>
        <i>September 2015 - June 2020</i>
      </p>
      <p>Full stack web and mobile development.</p>
      <h2>Skills</h2>
      <h3>Frontend development</h3>
      <p>
        React, Vue.js, Next.js, Nuxt.js, Gatsby, Storyblok, Strapi, GraphQL.
      </p>
      <h3>Mobile development</h3>
      <p>React Native, Android Studio, Xcode.</p>
      <h3>Backend development</h3>
      <p>PHP, Node.js, PostgreSQL, Symfony.</p>
      <h2>Education</h2>
      <h3>University of South Africa</h3>
      <p>
        <strong>
          Bachelor of Applied Science - Applied Mathematics and Computer Science
        </strong>
      </p>
      <p>
        <i>Pretoria, South Africa, 2019 - 2020</i>
      </p>
      <p>
        I completed the first two years of a three-year degree in Applied
        Mathematics and Computer Science.
      </p>
      <h3>University of Pretoria</h3>
      <p>
        <strong>
          Bachelor of Engineering - Electrical and Electronics Engineering
        </strong>
      </p>
      <p>
        <i>Pretoria, South Africa, 2007 - 2014</i>
      </p>
      <p>
        I completed the first three years of a four-year degree in Electronic
        Engineering.
      </p>
      <h2>Interests</h2>
      <p>
        I enjoy creating things, whether it&apos;s software, electronics, or
        making food. I also like playing games; board games, card games, or PC
        games. I enjoy spending time with my wife and our two dogs.
      </p>
    </div>
  );
}
