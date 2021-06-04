import React from "react";
import styles from "./SortingPageMainSection.module.css";

import SEPARATOR_ONE from "../../../Assets/Icons/separator1.svg";
import { AiFillStar } from "react-icons/ai";

const SortingPageMainSection = () => {
  return (
    <section className={styles.intro_section}>
      <h1 className={styles.heading}>Sorting Ceremony</h1>
      <img src={SEPARATOR_ONE} alt="" />
      <p className={styles.para}>
        Hogwarts was founded over a thousand years ago by four powerful wizards:
        Godric Gryffindor, Salazar Slytherin, Rowena Ravenclaw and Helga
        Hufflepuff. They chose to split the students into four ‘houses’, each
        bearing their surnames and featuring young wizards and witches who
        displayed abilities and personalities they wanted to nurture. To do
        this, Godric Gryffindor used his magical hat – henceforward known as the
        Sorting Hat – to decide which children should go into which house, and
        so it has been ever since with a yearly Sorting Ceremony that places
        each new pupil into their own new home.
      </p>
      <p className={styles.para}>
        Come find your own Hogwarts House by wearing the sorting hat!
      </p>

      <a id={styles.take_me_to_sorting} href="#sort-me-button">
        <AiFillStar className={styles.stars} /> Sort Me  <AiFillStar className={styles.stars} />
      </a>
    </section>
  );
};

export default SortingPageMainSection;
