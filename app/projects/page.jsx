"use client";

import React, { useState } from "react";
import ProjectList from "components/ProjectList";
import PROJECTS from "data/projects";
import styles from "./page.module.css";

const SORTING_METHODS = {
  alphabetical: (projectA, projectB) => {
    const nameA = projectA.name.toUpperCase();
    const nameB = projectB.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  },
};

export default function Projects() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("alphabetical");

  const filteredProjects = Object.values(PROJECTS).filter(
    ({ name, summary, tech, type }) =>
      !search ||
      search
        .toLowerCase()
        .split(" ")
        .some(
          (searchTerm) =>
            searchTerm &&
            `${name}${summary}${tech}${type}`.toLowerCase().includes(searchTerm)
        )
  );

  const sortedProjects = filteredProjects.sort(SORTING_METHODS[sort]);

  return (
    <>
      <h1>Projects</h1>
      <div className={styles.controls}>
        <input
          className={styles.search}
          type="text"
          onChange={(event) => setSearch(event.target.value)}
        />
        <select onChange={(event) => setSort(event.target.value)}>
          {Object.keys(SORTING_METHODS).map((sortingMethodName) => (
            <option key={sortingMethodName} value={sortingMethodName}>
              {sortingMethodName}
            </option>
          ))}
        </select>
      </div>
      <ProjectList projects={sortedProjects} />
    </>
  );
}
