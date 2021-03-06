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

const WizardProfileMyWand = lazy(() =>
  import("./WizardProfileMyWand/WizardProfileMyWand")
);

const WizardProfileFavouriteBeast = lazy(() => import("./WizardProfileFavouriteBeast/WizardProfileFavouriteBeast"));

const WizardProfileMyPatronus = lazy(() =>
  import("./WizardProfileMyPatronus/WizardProfileMyPatronus")
);

const HousePrideSection = lazy(() => import("./HousePrideSection/HousePrideSection"));

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
        <WizardProfileMyWand />
      </Suspense>
      
      <Suspense fallback={Loader}>
        <WizardProfileFavouriteBeast />
      </Suspense>

      <Suspense fallback={Loader}>
        <WizardProfileMyPatronus />
      </Suspense>
      
      <Suspense fallback={Loader}>
        <HousePrideSection />
      </Suspense>

      <Suspense fallback={Loader}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default WizardProfilePage;
