"use client";

import React, { useState } from "react";
import ProjectList from "components/ProjectList";
import PROJECTS from "data/projects";
import styles from "./page.module.css";

export default function Projects() {
  const [search, setSearch] = useState("");

  const filteredProjects = Object.values(PROJECTS).filter(
    ({ name, summary, technologies, type }) =>
      !search ||
      search
        .toLowerCase()
        .split(" ")
        .some(
          (searchTerm) =>
            searchTerm &&
            `${name}${summary}${technologies.join("")}${type}`
              .toLowerCase()
              .includes(searchTerm)
        )
  );

  const sortedProjects = filteredProjects.sort((projectA, projectB) => {
    const nameA = projectA.name.toUpperCase();
    const nameB = projectB.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div className={styles.controls}>
        <h1>Projects </h1>
        <input
          className={styles.search}
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="search..."
        />
      </div>
      <ProjectList projects={sortedProjects} />
    </>
  );
}
