import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";
import Link from "next/link";
import TypeLabel from "components/TypeLabel";

export default function ProjectCard({
  image,
  name,
  summary,
  technologies,
  type,
  urlKey,
}) {
  return (
    <li>
      <Link href={`/projects/${urlKey}`} className={styles.container}>
        <h3 className={styles.name}>{name}</h3>
        <Image
          className={styles.image}
          src={image}
          width={200}
          height={200}
          alt={`${name} project logo`}
        />
        <p className={styles.summary}>{summary}</p>
        <div className={styles.bottomRow}>
          <TypeLabel type={type} />
          <TypeLabel type={technologies[0]} />
        </div>
      </Link>
    </li>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  urlKey: PropTypes.string.isRequired,
};
