import React, { Suspense, lazy } from "react";
import styles from "./AboutPage.module.css";
import styled from "styled-components";

import MY_IMAGE from "../../Assets/Images/me.jpg";

import Loader from "../../Components/Loader/Loader";

const IntroSection = lazy(() => import("./IntroSection/IntroSection"));


const ImageContainer = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  width: 100vw;
  height: 550px;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 900px) {
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.05);
    height: 250px;
  }
`;

const AboutPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.intro_banner_section}>
        <ImageContainer src={MY_IMAGE} />
        <div className={styles.content_container}>
          <h1>Hey Everyone!</h1>
          <h2>I'm Tanishq Vyas</h2>
        </div>
      </section>
      <div className={styles.main_info_wrapper}>
        <Suspense fallback={Loader}>
          <IntroSection />
        </Suspense>
      </div>
    </main>
  );
};

export default AboutPage;
