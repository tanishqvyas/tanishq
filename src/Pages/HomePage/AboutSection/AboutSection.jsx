import React from "react";
import styles from "./AboutSection.module.css";
import globalSectionStyles from "../../../CSS/Section.module.css";
import globalLinkStyles from "../../../CSS/Link.module.css";

import { getCurrentAge } from "../../../Helpers/datetimeHelpers";

const AboutSection = () => {
  return (
    <section id="about" className={styles.container}>
      <h2
        className={`${globalSectionStyles.heading_light} ${globalSectionStyles.heading}`}
      >
        about me
      </h2>
      <p
        className={`${globalSectionStyles.para_light} ${globalSectionStyles.para}`}
      >
        Hello! I'm Tanishq Vyas, a {getCurrentAge()}-year-old who loves the
        wizarding world of Harry Potter, poetry & programming. I have always
        been intrigued by the ever evolving technology around me; which always
        sparked my curiosity.
      </p>
      <p
        className={`${globalSectionStyles.para_light} ${globalSectionStyles.para}`}
      >
        I am a graduate with a Btech degree from{" "}
        <a
          className={globalLinkStyles.link}
          href="https://pes.edu/"
          rel="noreferrer noopener"
          target="_blank"
        >
          PES University
        </a>{" "}
        Bengaluru in Computer Science and Engineering. Currently, I am working
        at{" "}
        <a
          className={globalLinkStyles.link}
          href="http://www.wal-martindia.in/media-library/photos/walmart-labs-bangalore"
          rel="noreferrer noopener"
          target="_blank"
        >
          Walmart Labs
        </a>{" "}
        Bengaluru as a Software Engineer.
      </p>
      <p
        className={`${globalSectionStyles.para_light} ${globalSectionStyles.para}`}
      >
        I love to write poems. I have recently published my first book, an anthalogy named&nbsp;
        <a
          className={globalLinkStyles.link}
          href="https://www.amazon.in/Poetry-book-Clustered-Heart-Tanishq/dp/8119266587"
          rel="noreferrer noopener"
          target="_blank"
        >
          Clustered Hearts
        </a>
        , a collection of 101 Limericks.
      </p>
    </section>
  );
};

export default AboutSection;
