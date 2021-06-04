import React from "react";
import styles from "./ProjectCard.module.css";
import { GoPrimitiveDot } from "react-icons/go";
import { BsBoxArrowUpRight } from "react-icons/bs";

const fadePercentage = 80;

const ProjectCard = ({
  projectName,
  cardBgColor,
  projectStartDate,
  isOngoing,
  paraList,
  technologiesUsed,
  links,
}) => {
  return (
    <section
      style={{
        background: `linear-gradient(to bottom right, ${cardBgColor} 0%, ${cardBgColor}${fadePercentage} 100%)`,
      }}
      className={styles.container}
    >
      <h1 className={styles.project_name}>{projectName}</h1>
      <div className={styles.sub_header_container}>
        <div>{projectStartDate}</div>
        {isOngoing && <GoPrimitiveDot className={styles.dot} />}
      </div>

      {paraList.map((item, index) => (
        <p key={index} className={styles.para}>
          {item}
        </p>
      ))}

      <div className={styles.tech_used_container}>
        {technologiesUsed.map((item, index) => {
          if (item.link === null)
            return (
              <div className={`${styles.tech_used}`} key={index}>
                {" "}
                {item.name}{" "}
              </div>
            );
    
          return (
            <a
              className={`${styles.tech_used}`}
              target="_blank"
              href={item.link}
              key={index}
              rel="external"
            >
              {" "}
              {item.name}{" "}
            </a>
          );
        })}
      </div>

      <div className={styles.links_container}>
        {links.map((item, index) => (
          <a
            className={styles.link_element}
            key={index}
            href={item.link}
            rel="next"
            target="_blank"
          >
            <BsBoxArrowUpRight className={styles.outer_arrow} /> {item.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
