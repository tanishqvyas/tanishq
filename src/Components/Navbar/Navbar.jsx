import React from "react";
import styles from "./Navbar.module.css";

import { navLinks } from "../../Data/Navbar";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div id={styles.name_container}>
          Tanishq Vyas
      </div>
      <nav id={styles.nav_container}>
        {navLinks.map((item, index) => (
          <a className={`${styles.nav_ele} ${"no-underline"}`} key={index} rel="next" href={item.link}>
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
