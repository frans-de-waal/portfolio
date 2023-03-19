import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.css";

export default function ProjectList({ projects }) {
  return (
    <ul className={styles.list}>
      {projects.map((project, index) => {
        const urlKey = project.name.toLowerCase().replace(/\s/g, "-");
        return (
          <ProjectCard
            priority={index === 0}
            key={urlKey}
            urlKey={urlKey}
            {...project}
          />
        );
      })}
    </ul>
  );
}
