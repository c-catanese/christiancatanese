"use client"
import Image from "next/image";
import styles from "./page.module.scss";


export default function About() {

  return (
    <div className={styles.aboutContainer}>
      <Image
        width={320}
        height={320}
        className={styles.headshot}
        src={'/headshot.jpeg'}
        alt="picture"
      />
      
    </div>
  );
}
