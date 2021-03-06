import React, { useRef, useState } from "react";
import styles from "./Footer.module.css";
import globalButtonStyles from "../../CSS/Button.module.css";

import { navLinks } from "../../Data/Footer";
import { socialLinks } from "../../Data/Links";
import { FiMail } from "react-icons/fi";
import { FaRegCopy, FaCopy } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiMailAddLine } from "react-icons/ri";

const Footer = () => {
  let [copyBtnText, setCopyBtnText] = useState(<FaRegCopy />);

  const bottomContainerRef = useRef(null);

  const toggleBottomContainer = (visibility) => {
    if (visibility) {
      bottomContainerRef.current.style.bottom = "0";
    } else {
      bottomContainerRef.current.style.bottom = "-200vh";
    }
  };

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
          <a
            key={index}
            target="_blank"
            rel="me"
            href={item.link}
            className={styles.social_wrapper}
          >
            {item.icon}
          </a>
        ))}
        <div
          onClick={() => toggleBottomContainer(true)}
          className={styles.social_wrapper}
        >
          <FiMail />
        </div>
      </div>
      <div className={styles.copyright_container}>
        &copy;2021 - present Tanishq Vyas
      </div>
      <div ref={bottomContainerRef} className={styles.bottom_container}>
        <AiOutlineCloseCircle
          onClick={() => {
            toggleBottomContainer(false);
            setCopyBtnText(<FaRegCopy />);
          }}
          className={styles.bottom_container_close_btn}
        />
        <h2 className={styles.bottom_container_email}>
          tanishqvyas069@gmail.com
        </h2>
        <div className={styles.bottom_container_btn_ctnr}>
          <a
            target="_blank"
            rel="me"
            href="mailto:tanishqvyas069@gmail.com"
            className={`${globalButtonStyles.basic_button} ${globalButtonStyles.basic_button_dark_filled}`}
          >
            <RiMailAddLine />
          </a>
          <button
            className={`${globalButtonStyles.basic_button} ${globalButtonStyles.basic_button_dark_filled}`}
            onClick={() => {
              navigator.clipboard.writeText("tanishqvyas069@gmail.com");
              setCopyBtnText(<FaCopy />);
            }}
          >
            {copyBtnText}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
