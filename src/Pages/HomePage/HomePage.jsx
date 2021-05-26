import React, { Suspense, lazy } from "react";
import styles from "./HomePage.module.css";

const MainSection = lazy(() => import("./MainSection/MainSection"));
const AboutSection = lazy(() => import("./AboutSection/AboutSection"));
const SkillsSection = lazy(() => import("./SkillsSection/SkillsSection"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));

const HomePage = () => {
  return (
    <main className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <MainSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutSection />
      </Suspense>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <SkillsSection />
      </Suspense> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default HomePage;
