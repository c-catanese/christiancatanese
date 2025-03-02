"use client"
import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.scss";

export default function Projects() {
  const [isHoveredVandyTFT, setIsHoveredVandyTFT] = useState(false);
  const [isHoveredWeeble, setIsHoveredWeeble] = useState(false);

  const handleMouseHover = (project: string, status: boolean) => {
    if (project === "VandyTFT") setIsHoveredVandyTFT(status);
    if (project === "Weeble") setIsHoveredWeeble(status);
  };

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectRow}>
        <div
          className={styles.imageWrapper}
          onMouseEnter={() => handleMouseHover("VandyTFT", true)}
          onMouseLeave={() => handleMouseHover("VandyTFT", false)}
        >
          <Image className={styles.image} width={500} height={500} src="/vandytft.png" alt="project" />
          {isHoveredVandyTFT && (
            <div className={styles.overlay}>
              <p>Technologies Used</p>
            </div>
          )}
        </div>
        <div className={styles.textWrapper}>
          <h2>Vandy TFT</h2>
          <p>
            As a Vanderbilt Alumni and multiple time winner of the Intramural TFT tournament, I built a leaderboard for
            students to be able to compare ranks and find other students to play with.
            <br />
            <br />
            I utilized the Riot Games API to fetch the current ranks of each player and stored them in a database...
          </p>
        </div>
      </div>

      <div className={styles.projectRow}>
        <div className={styles.textWrapper}>
          <h2>The Weeble</h2>
          <p>
            As a child I loved watching animes and I&apos;ve always had an appreciation for the music associated with
            different shows. I wanted to make a game where users could guess what show a song was from so I did!
          </p>
        </div>
        <div
          className={styles.imageWrapper}
          onMouseEnter={() => handleMouseHover("Weeble", true)}
          onMouseLeave={() => handleMouseHover("Weeble", false)}
        >
          <Image className={styles.image} width={500} height={500} src="/weeble.png" alt="project2" />
          {isHoveredWeeble && (
            <div className={styles.overlay}>
              <p>Technologies Used</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
