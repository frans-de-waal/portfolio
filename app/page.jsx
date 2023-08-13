import Image from "next/image";
import Link from "next/link"
import styles from "./page.module.css";
import portrait from "public/images/frans-transparent-2.png";
import ProjectList from "components/ProjectList";
import PROJECTS from "data/projects";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.col}>
          <h2>
            Hi, my name is <strong>Frans de Waal</strong>.
          </h2>
          <h1>
            I&apos;m a <strong>full stack developer</strong> specializing in{" "}
            <strong>web and mobile apps</strong>.
          </h1>
        </div>
        <div className={styles.circle}>
          <Image
            src={portrait}
            alt="Portrait of Frans"
            priority
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
      <h2>Major Recent Projects</h2>
      <ProjectList
        projects={[
          PROJECTS["opfc"],
          PROJECTS["leatt"],
          PROJECTS["secure-legacy"],
        ]}
      />
      <Link href="/projects" className={styles.viewAll}>View all projects</Link>
    </>
  );
}
