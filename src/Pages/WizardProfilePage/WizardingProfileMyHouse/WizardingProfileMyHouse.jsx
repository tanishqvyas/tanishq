import React from "react";
import styles from "./WizardingProfileMyHouse.module.css";

import { wizardProfile } from "../../../Data/aboutMe";


const WizardingProfileMyHouse = () => {
  return (
    <section id={styles.my_house}>
      <div className={styles.my_house_info_container}>
        <p className={styles.my_house_para}>Sorted into</p>
        <h1 className={styles.my_house_name}>{wizardProfile.house.name}</h1>
        <p className={styles.my_house_date}>
          * {wizardProfile.sortedOnDate} *
        </p>
      </div>
      <img
        className={styles.house_crest_banner}
        src={wizardProfile.house.crestBanner}
        alt=""
      />
    </section>
  );
};

export default WizardingProfileMyHouse;
