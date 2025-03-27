"use client"
import styles from "./page.module.scss";
import Project from "../Components/Project/project";
export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <Project title={'Vandy TFT'} alignmentLeft={true} img={"/vandytft.png"} description=" As a Vanderbilt Alumni and multiple time winner of the Intramural TFT tournament, I built a leaderboard for students to be able to compare ranks and find other students to play with.<br /> <br />I utilized the Riot Games API to fetch the current ranks of each player and stored them in a database..."/>
    </div>
  );
}
