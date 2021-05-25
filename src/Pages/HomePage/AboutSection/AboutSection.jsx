import React from "react";
import styles from "./AboutSection.module.css";
import globalSectionStyles from "../../../CSS/Section.module.css";
import globalLinkStyles from "../../../CSS/Link.module.css";

import { getCurrentAge } from "../../../Helpers/datetimeHelpers";

const AboutSection = () => {
  return (
    <section id="#about" className={styles.container}>
      <h2
        className={`${globalSectionStyles.heading_light} ${globalSectionStyles.heading}`}
      >
        about me
      </h2>
      <p
        className={`${globalSectionStyles.para_light} ${globalSectionStyles.para}`}
      >
        Hello! I'm Tanishq Vyas, a {getCurrentAge()}-year-old who loves poetry
        and programming. I have always been intrigued by the ever evolving
        technology around me; which always sparked my curiosity.
      </p>
      <p
        className={`${globalSectionStyles.para_light} ${globalSectionStyles.para}`}
      >
        I am currently pursuing my Btech degree at{" "}
        <a
          className={globalLinkStyles.link}
          href="https://pes.edu/"
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          PES University
        </a>
        {" "} Bengalure in Computer Science and Engineering. Currently, I am
        interning at{" "}
        <a
          className={globalLinkStyles.link}
          href="http://www.wal-martindia.in/media-library/photos/walmart-labs-bangalore"
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          Walmart Labs
        </a> Bengaluru for the summer of 2021.
      </p>
      <p
        className={`${globalSectionStyles.para_light} ${globalSectionStyles.para}`}
      >
        Out of all, games, were the one which interested me the most. That was
        one of the main reasons I started to learn programming. The moment I
        built my first game, I was thrilled. Since then there has been no
        stopping. I have continuously explored various technologies out there
        and how are they used to build different things.
      </p>
      <p
        className={`${globalSectionStyles.para_light} ${globalSectionStyles.para}`}
      >
        I am a conscientious and enthusiastic student seeking a platform to
        learn a great deal about different technical domains, and an opportunity
        to interact with peers interested in the same.
      </p>
    </section>
  );
};

export default AboutSection;
