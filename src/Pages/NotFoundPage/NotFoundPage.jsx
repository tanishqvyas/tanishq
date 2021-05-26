import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import globalButtonStyles from "../../CSS/Button.module.css";


const NotFoundPage = () => {

  const history = useHistory();

  return (
    <section className={styles.container}>
      <div className={styles.info_container}>
        <h1 className={styles.four_not_four}>404</h1>
        <h1 className={styles.text}>Page Not Found</h1>
        <button onClick={() => history.push("/home")} className={`${globalButtonStyles.basic_button} ${globalButtonStyles.basic_button_light_filled}`}>
            Back to Exploration
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;
