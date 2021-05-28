import React from "react";
import styles from "./WizardProfileFavouriteBeast.module.css";

import { wizardProfile } from "../../../Data/aboutMe";
import SEPARATOR_ONE from "../../../Assets/Icons/separator1.svg";

const WizardProfileFavouriteBeast = () => {
  return (
    <section id={styles.fav_beast}>
      <div className={styles.fav_beast_info}>
        <h3 className={styles.fav_beast_txt}>Favourite Beast</h3>
        <h1 className={styles.fav_beast_name}>{wizardProfile.beast.name}</h1>
        <img className={styles.separator} src={SEPARATOR_ONE} alt="" />
        <p className={styles.fav_beast_para}>
          The Horned Serpent was a magical snake found in several regions of the
          world, but was most common in North America. Ilvermorny School
          of Witchcraft and Wizardry founder Isolt Sayre befriended one of these
          serpents and named one of the four school houses after it.
        </p>
      </div>
      <img
        className={styles.fav_beast_img}
        src={wizardProfile.beast.image}
        alt=""
      />
    </section>
  );
};

export default WizardProfileFavouriteBeast;
