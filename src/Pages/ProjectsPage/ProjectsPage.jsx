import React, {lazy, Suspense} from "react";
import styles from "./ProjectsPage.module.css";
import globalHeadingStyles from "../../CSS/Heading.module.css";

import SEAPRATOR_IMAGE from "../../Assets/Icons/separator1.svg";

import { projectsList } from "../../Data/projects";
import Loader from "../../Components/Loader/Loader";

const ProjectCard = lazy(() => import("../../Components/ProjectCard/ProjectCard"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));

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
          Here are a few of the many projects I have built over the years.
        </p>
        <img src={SEAPRATOR_IMAGE} alt="" />
      </section>

      <section className={styles.projects_container}>
        {projectsList.map((item, index) => (
          <Suspense fallback={Loader}>
          <ProjectCard key={index} {...item} />
        </Suspense>
        ))}
      </section>
      <Suspense fallback={Loader}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default ProjectsPage;
