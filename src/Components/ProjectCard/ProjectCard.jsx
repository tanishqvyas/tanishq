import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  projectName,
  cardBgColor,
  projectStartDate,
  para1,
  para2,
  technologiesUsed,
  links,
}) => {
  return (
    <section style={{ background: cardBgColor }} className={styles.container}>
      <h1 className={styles.project_name}>{projectName}</h1>
    </section>
  );
};

export default ProjectCard;
