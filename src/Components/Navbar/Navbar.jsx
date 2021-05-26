import React, { useRef } from "react";
import styles from "./Navbar.module.css";

import { navLinks } from "../../Data/Navbar";
import { websiteBaseURL } from "../../Config/Config";

import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const navContainerREF = useRef(null);

  const handleToggle = (visibility) => {
    if (visibility) {
      navContainerREF.current.style.right = "0";
    } else {
      navContainerREF.current.style.right = "-200vw";
    }
  };

  return (
    <header id="navbar" className={styles.container}>
      <a
        href={websiteBaseURL}
        id={styles.name_container}
        className={"no-underline"}
      >
        Tanishq Vyas
      </a>
      <AiOutlineMenuFold
        onClick={() => handleToggle(true)}
        className={styles.menu_btn}
      />
      <nav ref={navContainerREF} id={styles.nav_container}>
        <div className={styles.close_btn_ctnr}>
          <IoCloseSharp
            onClick={() => handleToggle(false)}
            className={styles.close_btn}
          />
        </div>
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
    </header>
  );
};

export default Navbar;
