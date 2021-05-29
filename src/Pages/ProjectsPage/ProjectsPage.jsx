import React from "react";
import styles from "./ProjectsPage.module.css";
import globalHeadingStyles from "../../CSS/Heading.module.css";

import SEAPRATOR_IMAGE from "../../Assets/Icons/separator1.svg";

import { projectsList } from "../../Data/projects";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const ProjectsPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.header_section}>
        <h1
          className={`${globalHeadingStyles.heading} ${globalHeadingStyles.heading_light}`}
        >
          My Projects
        </h1>
        <p className={styles.header_para}>
          Here is a collection of my projects that have done over the years.
        </p>
        <img src={SEAPRATOR_IMAGE} alt="" />
      </section>

      <section className={styles.projects_container}>
        {projectsList.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </section>
    </main>
  );
};

export default ProjectsPage;
