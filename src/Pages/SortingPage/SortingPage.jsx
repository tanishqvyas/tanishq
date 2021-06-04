import React, { lazy, Suspense } from "react";
import styles from "./SortingPage.module.css";

import Loader from "../../Components/Loader/Loader";

const SortingPageMainSection = lazy(() =>
  import("./SortingPageMainSection/SortingPageMainSection")
);

const SortingSongSection = lazy(() =>
  import("./SortingSongSection/SortingSongSection")
);

const SortingPage = () => {
  return (
    <main>
      <Suspense fallback={Loader}>
        <SortingPageMainSection />
      </Suspense>

      <Suspense fallback={Loader}>
        <SortingSongSection />
      </Suspense>
    </main>
  );
};

export default SortingPage;
