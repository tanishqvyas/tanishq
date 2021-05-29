import React from "react";
import styles from "./HousePrideSection.module.css";

import { websiteBaseURL } from "../../../Config/Config";
import SEPARATOR_ONE from "../../../Assets/Icons/separator1.svg";
import SEPARATOR_TWO from "../../../Assets/Icons/separator2.svg";

import GRYFFINDOR_HOUSE_PRIDE from "../../../Assets/Banners/gryffindorPride.png";
import SLYTHERIN_HOUSE_PRIDE from "../../../Assets/Banners/slytherinPride.png";
import RAVENCLAW_HOUSE_PRIDE from "../../../Assets/Banners/ravenclawPride.png";
import HUFFLEPUFF_HOUSE_PRIDE from "../../../Assets/Banners/hufflepuffPride.png";

const housePrideInfo = [
  {
    name: "Gryffindor",
    image: GRYFFINDOR_HOUSE_PRIDE,
  },
  {
    name: "Slytherin",
    image: SLYTHERIN_HOUSE_PRIDE,
  },
  {
    name: "Ravenclaw",
    image: RAVENCLAW_HOUSE_PRIDE,
  },
  {
    name: "Hufflepuff",
    image: HUFFLEPUFF_HOUSE_PRIDE,
  },
];

const prideBgColors = ["#173250", "#1c3d38", "#6b2b2b", "#b5803e"];

const HousePrideSection = () => {
  return (
    <section
      style={{ background: prideBgColors[Math.floor(Math.random() * 4)] }}
      id="house-pride"
      className={styles.container}
    >
      <h1 className={styles.header_title}>House Prides</h1>
      <img src={SEPARATOR_ONE} alt="" />
      <p className={styles.para}>
        {" "}
        Hogwarts is divided into four houses, each bearing the last name of its
        founder, Godric Gryffindor, Salazar Slytherin, Rowena Ravenclaw and
        Helga Hufflepuff. Take a look at your house prides.
      </p>

      <div className={styles.house_prides_container}>
        {housePrideInfo.map((item, index) => (
          <div className={styles.house_pride_card}>
            <div className={styles.house_pride_img_container}>
              <img
                className={styles.house_pride_img}
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className={styles.house_pride_info_container}>
              <h3>House Pride</h3>
              <img src={SEPARATOR_TWO} alt="" />
              <h1 className={styles.house_pride_name}> {item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HousePrideSection;
