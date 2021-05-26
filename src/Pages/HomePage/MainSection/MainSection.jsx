import React from "react";
import styles from "./MainSection.module.css";
import Particles from "react-particles-js";

import { getGreeting, getCurrentAge } from "../../../Helpers/datetimeHelpers";
import { IoIosArrowDown } from "react-icons/io";

const MainSection = () => {

  const getParticleCount = () => {
    if(window.innerWidth >= 800) {
      return 100;
    } else {
      return 42;
    }
  }
  

  return (
    <section className={styles.container}>
      <article className={styles.article}>
        <h1 className={styles.heading}>
          {getGreeting()}, I'm <span className={styles.name}>Tanishq Vyas</span>
        </h1>
        <p className={styles.para}>
          I am a {getCurrentAge()}-year-old who loves making games, writing
          poems & programming.
        </p>

        <a href="#about" className={`${styles.explore_btn} ${"no-underline"}`}>
          <IoIosArrowDown className={styles.down_icon} />
        </a>
      </article>
      <Particles
        className={styles.bg_particles}
        params={{
          particles: {
            number: {
              value: getParticleCount(),
            },
            size: {
              value: 3,
            },
            color: {
                value: "#ffffff"
            }
          },

          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </section>
  );
};

export default MainSection;
