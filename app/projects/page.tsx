"use client"
import styles from "./page.module.scss";
import Project from "../Components/project/project"

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <Project 
        title={'Vandy TFT'} 
        alignmentLeft={true}
        url={"https://vandytft.com"}
        description={`As a Vanderbilt Alumni and multiple time winner of the Intramural TFT tournament, I built a leaderboard for students to be able to compare ranks and find other students to play with. \n\nI implemented a fully functional authentication process with encryption that only allows Vanderbilt Students/Alumni with valid Riot Games accounts to sign up.\n\nI utilized the Riot Games API to fetch the current ranks of each player and stored them in a database. Initially, every user's rank was being updated on each render and I decided to add in an update button to speed up the initial call to the database. \n\n Overall it was a fun project and my first time working with NextJS which I have come to use as my default framework for most of my projects.`}/>
      <Project title={'The Weeble'} alignmentLeft={false} url={"https://theweeble.com"} description=" As a Vanderbilt Alumni and multiple time winner of the Intramural TFT tournament, I built a leaderboard for students to be able to compare ranks and find other students to play with.<br /> <br />I utilized the Riot Games API to fetch the current ranks of each player and stored them in a database..."/>
      <Project title={'TCCG'} alignmentLeft={true} url={"https://tccginc.com"} description=" As a Vanderbilt Alumni and multiple time winner of the Intramural TFT tournament, I built a leaderboard for students to be able to compare ranks and find other students to play with.<br /> <br />I utilized the Riot Games API to fetch the current ranks of each player and stored them in a database..."/>
      <Project title={'SolidRewind'} alignmentLeft={false} url={"https://vandytft.com"} description=" As a Vanderbilt Alumni and multiple time winner of the Intramural TFT tournament, I built a leaderboard for students to be able to compare ranks and find other students to play with.<br /> <br />I utilized the Riot Games API to fetch the current ranks of each player and stored them in a database..."/>
   </div>
  );
}
