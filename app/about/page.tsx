"use client"
import Image from "next/image";
import styles from "./page.module.scss";


export default function About() {

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.topRow}>
        <Image
          width={320}
          height={320}
          className={styles.headshot}
          src={'/headshot.jpeg'}
          alt="picture"
        />
        <p className={styles.topRowText}>Hi I&apos;m Christian Catanese a Software Engineer from South Florida. <br/><br/>This website is meant to be a place to keep track of my projects and for people to learn a little more about me.</p>
      </div>
      <div className={styles.textBlock}>
        <h2 className={styles.heading}>Skills:</h2>
        <p> Javascript, Typescript, CSS, HTML, </p>
      </div>
    </div>
  );
}
