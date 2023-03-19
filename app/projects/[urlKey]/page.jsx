import Image from "next/image";
import Link from "next/link";
import {
  IoLogoGooglePlaystore,
  IoLogoAppleAppstore,
  IoGlobeOutline,
} from "react-icons/io5";
import PROJECTS from "data/projects";
import TypeLabel from "components/TypeLabel";
import styles from "./page.module.css";

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((urlKey) => ({ urlKey }));
}

export default function Project({ params: { urlKey } }) {
  const {
    name,
    role,
    type,
    links: { android, ios, web },
    image,
    info,
    summary,
    technologies,
  } = PROJECTS[urlKey];

  return (
    <>
      <Link href="/projects" className={styles.backButton}>
        &lt;Back to projects
      </Link>
      <h1 className={styles.heading}>{name}</h1>
      <Image
        className={styles.image}
        src={image}
        width={200}
        height={200}
        alt={`${name} project logo`}
        priority
      />
      {(android || ios || web) && (
        <h2 className={styles.subHeading}>
          <i>View the project</i>
        </h2>
      )}
      <div className={styles.links}>
        {android && (
          <a href={android} target="_blank" rel="noreferrer">
            <IoLogoGooglePlaystore size="2rem" color="var(--c-accent)" />
          </a>
        )}
        {ios && (
          <a href={ios} target="_blank" rel="noreferrer">
            <IoLogoAppleAppstore size="2rem" color="var(--c-accent)" />
          </a>
        )}
        {web && (
          <a href={web} target="_blank" rel="noreferrer">
            <IoGlobeOutline size="2rem" color="var(--c-accent)" />
          </a>
        )}
      </div>
      <p className={styles.copy}>{summary}</p>
      {info && (
        <h2 className={styles.subHeading}>
          <i>Project background</i>
        </h2>
      )}
      {info && <p className={styles.copy}>{info}</p>}
      {role && (
        <h2 className={styles.subHeading}>
          <i>My role in the project</i>
        </h2>
      )}
      {role && <p className={styles.copy}>{role}</p>}
      <div className={styles.labelList}>
        <TypeLabel type={type} />
        {technologies.map((tech) => (
          <TypeLabel key={tech} type={tech} />
        ))}
      </div>
    </>
  );
}
