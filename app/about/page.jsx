import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>

      <p>
        I am an experienced senior software engineer with a demonstrated history of working with modern web and mobile technologies. I am passionate about creating effective solutions for modern problems.
      </p>

      <h2>Work Experience</h2>

      <h3>First Table</h3>
      <p><strong>Senior Front-End Developer</strong></p>
      <p>
        <i>January 2024 - PRESENT</i>
      </p>
      <p>I am working on the First Table web platform, as well as various internal business tools.</p>

      <h3>Vectra Business Technologies</h3>
      <p>
        <strong>Senior Software Developer</strong>
      </p>
      <p>
        <i>April 2021 - November 2023 (2 years, 7 months)</i>
      </p>
      <p>I was the technical lead on multiple web-based e-commerce projects.</p>

      <h3>Comune.IT</h3>
      <p>
        <strong>Development Team Lead</strong>
      </p>
      <p>
        <i>July 2020 - March 2021 (9 months)</i>
      </p>
      <p>
        I was responsible for managing the development team and various software projects.
      </p>

      <h3>Comune.IT</h3>
      <p>
        <strong>Full stack Developer</strong>
      </p>
      <p>
        <i>September 2015 - June 2020 (4 years, 9 months)</i>
      </p>
      <p>Starting as a junior developer I worked on various full-stack web and mobile projects.</p>

      <h2>References<sup>*</sup></h2>

      <h3>Jaco Groenewald</h3>
      <p>
        Co-founder of Comune.IT
      </p>

      <h3>Wynand Geldenhuys</h3>
      <p>Founder & Managing Director of Vectra</p>

      <h3>Caroline Van Dyk</h3>
      <p>Head of Operations at Vectra</p>

      <h3>O&apos;Conner Smith</h3>
      <p>Product Manager at Vectra</p>

      <br /><i><sup>*</sup>Contact information available on request.</i>

      <h2>Skills</h2>

      <h3>Languages</h3>
      <p>JavaScript, HTML, CSS, PHP, PostgreSQL, GraphQL, C++</p>

      <h3>Frontend Frameworks & Libraries</h3>
      <p>
        React, Next.js, Gatsby, Vue.js, Nuxt.js, Vite, SolidJS, jQuery, Redux
      </p>

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
        Apache, AWS (EC2, RDS, S3), Bitbucket Pipelines (CI/CD), Docker, Firebase,
        Git, Heroku, Linux (command line), Vercel
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
        I take pleasure in creating a variety of things, ranging from software and electronics to cooking dinner with my wife. Additionally, I enjoy various forms of gaming, including board games, card games, and PC games. I like to spend time with my wife and our two dogs over the weekends.
      </p>
    </div>
  );
}
