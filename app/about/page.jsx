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

      <h2>References</h2>

      <h3>Jaco Groenewald</h3>
      <p>
        <strong>Co-founder of Comune.IT</strong>
      </p>
      <p>
        <a href="mailto:jacozyklonb@gmail.com" target="_blank" rel="noreferrer">
          jacozyklonb@gmail.com
        </a>
      </p>
      <p>
        <i>Phone number on request</i>
      </p>

      <h2>Skills</h2>

      <h3>Languages</h3>
      <p>JavaScript, HTML, CSS, PHP, PostgreSQL, GraphQL, C++</p>

      <h3>Frontend Frameworks</h3>
      <p>React, Next.js, Gatsby, Vue.js, Nuxt.js, Vite, SolidJS, jQuery</p>

      <h3>Mobile App Frameworks</h3>
      <p>React Native</p>

      <h3>Backend Frameworks</h3>
      <p>Yii, Symfony, Node.js, Express.js</p>

      <h3>Styling Frameworks</h3>
      <p>SCSS/SASS, CSS Modules, styled-components, Tailwind, Bootstrap</p>

      <h3>CMS Platforms</h3>
      <p>Storyblok, Strapi</p>

      <h3>DevOps</h3>
      <p>
        Git, Docker, AWS <i>(EC2, RDS, S3)</i>, Heroku, Vercel, Firebase,
        Bitbucket Pipelines
      </p>

      <h3>Project Management</h3>
      <p>Agile Methodologies, Jira</p>

      <h3>Development Tools</h3>
      <p>
        Visual Studio Code, Android Studio, Xcode, Postman, Bitbucket, GitHub,
        NPM
      </p>

      <h2>Education</h2>

      <h3>University of South Africa</h3>
      <p>
        <strong>
          Bachelor of Applied Science - Applied Mathematics and Computer Science
        </strong>
      </p>
      <p>
        <i>2019 - 2020</i>
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
        <i>2007 - 2014</i>
      </p>
      <p>
        I completed the first three years of a four-year degree in Electronic
        Engineering.
      </p>
      <ul>
        <li>
          I placed second in the Electronic Engineering group in my first year.
        </li>
        <li>
          In 2008 I became a member of the Golden Key International Honour
          Society.
        </li>
        <li>
          I placed third in the Electronic Engineering group in my second year.
        </li>
        <li>
          In 2009 I was nominated to participate in the International Scholar
          Laureate program.
        </li>
      </ul>

      <h3>John Vorster Technical High School</h3>
      <p>
        <i>Graduated in 2006</i>
      </p>
      <p>
        I graduated with 6 distinctions, and an average grade of 84% for 8
        subjects, the second highest in the year.
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
