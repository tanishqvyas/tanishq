import React, { lazy, Suspense } from "react";
import styles from "./WizardProfilePage.module.css";

import { wizardProfile } from "../../Data/aboutMe";
import Loader from "../../Components/Loader/Loader";

const WizardingProfileMainSection = lazy(() =>
  import("./WizardingProfileMainSection/WizardingProfileMainSection")
);

const WizardingProfileMyHouse = lazy(() =>
  import("./WizardingProfileMyHouse/WizardingProfileMyHouse")
);

const Footer = lazy(() => import("../../Components/Footer/Footer"));

const WizardProfilePage = () => {
  return (
    <main className={styles.container}>
      <Suspense fallback={Loader}>
        <WizardingProfileMainSection />
      </Suspense>

      <Suspense fallback={Loader}>
        <WizardingProfileMyHouse />
      </Suspense>

      <Suspense fallback={Loader}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default WizardProfilePage;
