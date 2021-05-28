import React from "react";
import styles from "./IntroSection.module.css";
import pageStyles from "../AboutPage.module.css";
import globalLinkStyles from "../../../CSS/Link.module.css";

import { getCurrentAge } from "../../../Helpers/datetimeHelpers";

const IntroSection = () => {
  return (
    <section className={styles.container}>
      <h1 className={`${pageStyles.heading} ${pageStyles.heading_light}`}>
        About Me
      </h1>
     
    </section>
  );
};

export default IntroSection;
