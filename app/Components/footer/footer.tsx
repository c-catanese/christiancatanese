"use client";

import IconWithHover from "../iconWithHover/iconWithHover";
import styles from "./footer.module.scss"


export default function Footer() {

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
          <IconWithHover img="/githubLogo.webp" text="Github"  link="https://github.com/c-catanese/"/>
          <IconWithHover img="/linkedInLogo.png" text="LinkedIn"  link="https://www.linkedin.com/in/christian-catanese/"/>
      </div>
    </div>
  );
}
