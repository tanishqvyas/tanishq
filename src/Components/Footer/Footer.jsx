import React from "react";
import styles from "./Footer.module.css";

import { navLinks } from "../../Data/Footer";
import { socialLinks } from "../../Data/Links";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <nav className={styles.footer_nav}>
        {navLinks.map((item, index) => (
          <a
            className={`${styles.nav_ele} ${"no-underline"}`}
            key={index}
            rel="next"
            href={item.link}
          >
            {item.name}
          </a>
        ))}
      </nav>
      <h3 className={styles.connect_with_me}> Connect With Me </h3>
      <div className={styles.socials_container}>
        {socialLinks.map((item, index) => (
          <a href={item.link} className={styles.social_wrapper}>
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright_container}>
        &copy;2021 - present Tanishq Vyas
      </div>
    </footer>
  );
};

export default Footer;
