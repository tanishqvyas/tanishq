import React, { Suspense, lazy } from "react";
import styles from "./HomePage.module.css";

import Loader from "../../Components/Loader/Loader";

const MainSection = lazy(() => import("./MainSection/MainSection"));
const AboutSection = lazy(() => import("./AboutSection/AboutSection"));
const SkillsSection = lazy(() => import("./SkillsSection/SkillsSection"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));

const HomePage = () => {


  return (
    <main className={styles.container}>
      <Suspense fallback={Loader}>
        <MainSection />
      </Suspense>
      <Suspense fallback={Loader}>
        <AboutSection />
      </Suspense>
      {/* <Suspense fallback={Loader}>
        <SkillsSection />
      </Suspense> */}
      <Suspense fallback={Loader}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default HomePage;
