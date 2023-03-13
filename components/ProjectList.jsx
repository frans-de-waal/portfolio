import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.css";

export default function ProjectList({ projects }) {
  return (
    <ul className={styles.list}>
      {projects.map((project) => {
        const urlKey = project.name.toLowerCase().replace(/\s/g, "-");
        return <ProjectCard key={urlKey} urlKey={urlKey} {...project} />;
      })}
    </ul>
  );
}
