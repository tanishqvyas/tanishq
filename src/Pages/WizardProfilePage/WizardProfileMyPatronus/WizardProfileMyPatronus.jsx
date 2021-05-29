import React from "react";
import styles from "./WizardProfileMyPatronus.module.css";

import styled from "styled-components";

import { wizardProfile } from "../../../Data/aboutMe";
import FOREST_IMAGE from "../../../Assets/Images/forest.jpeg";

const ImageContainer = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  width: 100%;
  height: 850px;
  background-position: center;
  background-size: cover;
  position: absolute;
  top:0;
  left:0;
  z-index:-1;

  @media screen and (max-width: 900px) {
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.05);
    height: 650px;
  }
`;

const WizardProfileMyPatronus = () => {
  return (
    <section id={styles.my_patronus}>
        <ImageContainer src={FOREST_IMAGE} />
      <h1 className={styles.my_patronus}>My Patronus</h1>
      <div className={styles.my_patronus_img_wrapper}>
        <img
          class={styles.my_patronus_image}
          src={wizardProfile.patronus.image}
          alt=""
        />
      </div>
      <p className={styles.my_patronus_name}>{wizardProfile.patronus.name}</p>
    </section>
  );
};

export default WizardProfileMyPatronus;
