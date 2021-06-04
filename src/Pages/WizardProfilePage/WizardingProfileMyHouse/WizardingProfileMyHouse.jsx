import React from "react";
import styles from "./WizardingProfileMyHouse.module.css";

import { wizardProfile } from "../../../Data/aboutMe";
import { GiSnitchQuidditchBall, GiFeather } from "react-icons/gi";
import { FaQuidditch } from "react-icons/fa";

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
      {/* <GiFeather className={styles.bg_icons} id={styles.feather} /> */}
      {/* <GiSnitchQuidditchBall className={styles.bg_icons} id={styles.snitch_one} /> */}
      {/* <FaQuidditch className={styles.bg_icons} id={styles.quidditch_one} /> */}
    </section>
  );
};

export default WizardingProfileMyHouse;
