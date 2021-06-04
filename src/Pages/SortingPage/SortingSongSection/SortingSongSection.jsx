import React from "react";
import styles from "./SortingSongSection.module.css";

import {GiPointyHat} from "react-icons/gi";

const SortingSongSection = () => {
  return (
    <section>
      <GiPointyHat id={styles.sorting_hat_image} />
    </section>
  );
};

export default SortingSongSection;
