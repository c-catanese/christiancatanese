"use client";

import IconWithHover from "../iconWithHover/iconWithHover";
import styles from "./footer.module.scss"


export default function Footer() {

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
          <IconWithHover img="/githubLogo.webp" text="Github"  link="https://github.com/c-catanese/"/>
          <IconWithHover img="/youtubeLogo.webp" text="Youtube"  link="https://www.youtube.com/@fawlen_gaming"/>
          <IconWithHover img="/instagramLogo.webp" text="Instagram"  link="https://www.instagram.com/c.catanese"/>
          <IconWithHover img="/linkedInLogo.png" text="LinkedIn"  link="https://www.linkedin.com/in/christian-catanese/"/>
      </div>
    </div>
  );
}
