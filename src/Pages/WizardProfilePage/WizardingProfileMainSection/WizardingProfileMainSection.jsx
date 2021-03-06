import React from "react";
import styles from "./WizardingProfileMainSection.module.css";

import { wizardProfile } from "../../../Data/aboutMe";
import { BsSquare } from "react-icons/bs";

const WizardingProfileMainSection = () => {
  return (
    <section id={styles.intro_container}>
      <img
        className={styles.main_logo}
        src={wizardProfile.house.crestLogo}
        alt=""
      />
      <h3 className={styles.i_am_a}>I'm a</h3>
      <h1 className={styles.house_name}>{wizardProfile.house.name}</h1>
      <p className={styles.tagline}>{wizardProfile.house.tagline}</p>
      <div className={styles.square_wrapper}>
        <BsSquare className={styles.square} />
        <BsSquare className={`${styles.square} ${styles.square1}`} />
      </div>
      <p className={styles.desc_para}>{wizardProfile.house.desc}</p>
    </section>
  );
};

export default WizardingProfileMainSection;
