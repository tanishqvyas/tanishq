import React, { Suspense } from "react";
import styles from "./HomePage.module.css";

const MainSection = React.lazy(() => import("./MainSection/MainSection"));

const HomePage = () => {
  return (
    <main className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <MainSection />
      </Suspense>
      
    </main>
  );
};

export default HomePage;
