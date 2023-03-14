import PROJECTS from "data/projects";
import styles from "./page.module.css";
import {
  IoLogoGooglePlaystore,
  IoLogoAppleAppstore,
  IoGlobeOutline,
} from "react-icons/io5";
import TypeLabel from "components/TypeLabel";
import Image from "next/image";

export default function Project({ params: { urlKey } }) {
  const {
    name,
    role,
    type,
    links: { android, ios, web },
    image,
    summary,
    technologies,
    ...rest
  } = PROJECTS[urlKey];
  console.log("project", {
    name,
    role,
    type,
    links: { android, ios, web },
    image,
    summary,
    technologies,
    ...rest,
  });

  return (
    <>
      <div className={styles.banner}>
        <Image
          className={styles.image}
          src={image}
          width={200}
          height={200}
          alt={`${name} project logo`}
          priority
        />
        <div className={styles.titleSection}>
          <div className={styles.heading}>
            <h1>{name}</h1>
            <TypeLabel type={type} />
          </div>
          <p>{summary}</p>
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
          <div className={styles.techList}>
            {technologies.map((tech) => (
              <TypeLabel key={tech} type={tech} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
