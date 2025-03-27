"use client"
import styles from "./page.module.scss";
import Project from "../Components/project/project";

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <Project title={'Vandy TFT'} alignmentLeft={true} url={"https://vandytft.com"} description=" As a Vanderbilt Alumni and multiple time winner of the Intramural TFT tournament, I built a leaderboard for students to be able to compare ranks and find other students to play with.<br /> <br />I utilized the Riot Games API to fetch the current ranks of each player and stored them in a database..."/>
      <Project title={'The Weeble'} alignmentLeft={false} url={"https://theweeble.com"} description=" As a Vanderbilt Alumni and multiple time winner of the Intramural TFT tournament, I built a leaderboard for students to be able to compare ranks and find other students to play with.<br /> <br />I utilized the Riot Games API to fetch the current ranks of each player and stored them in a database..."/>
      <Project title={'TCCG'} alignmentLeft={true} url={"https://tccginc.com"} description=" As a Vanderbilt Alumni and multiple time winner of the Intramural TFT tournament, I built a leaderboard for students to be able to compare ranks and find other students to play with.<br /> <br />I utilized the Riot Games API to fetch the current ranks of each player and stored them in a database..."/>
    </div>
  );
}
