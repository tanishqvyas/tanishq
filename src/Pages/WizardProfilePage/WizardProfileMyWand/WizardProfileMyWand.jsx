import React from "react";
import styles from "./WizardProfileMyWand.module.css";

import styled from "styled-components";
import OLLIVANDER_IMAGE from "../../../Assets/Images/ollivanders.jpeg";


import { wizardProfile } from "../../../Data/aboutMe";

const ImageContainer = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  width: 100vw;
  height: 850px;
  background-position: center;
  background-size: cover;
  position: absolute;
  top:0;
  z-index:-1;
  opacity: 0.3;
  @media screen and (max-width: 900px) {
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.05);
    height: 550px;
  }
`;


const WizardProfileMyWand = () => {
  return (
    <section id={styles.my_wand_section}>
      <h1 className={styles.my_wand}>My Wand</h1>
      <div className={styles.my_wand_img_wrapper}>
        <img
          class={styles.my_wand_image}
          src={wizardProfile.wand.image}
          alt=""
        />
      </div>
      <p className={styles.my_wand_desc}>{wizardProfile.wand.desc}</p>
      <ImageContainer src={OLLIVANDER_IMAGE} />
    </section>
  );
};

export default WizardProfileMyWand;
