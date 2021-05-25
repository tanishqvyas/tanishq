import React from "react";
import styles from "./Navbar.module.css";

import { navLinks } from "../../Data/Navbar";
import { websiteBaseURL } from "../../Config/Config";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <a
      href={websiteBaseURL}
      id={styles.name_container}
      className={"no-underline"}
      >
        
          Tanishq Vyas
      </a>
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
