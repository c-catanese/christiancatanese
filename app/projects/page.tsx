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
        description={`As a Vanderbilt Alumni and multiple time winner of the Intramural TFT tournament, I built a leaderboard for students to be able to compare ranks and find other students to play with. \n\nI implemented a fully functional authentication process with encryption that only allows Vanderbilt Students/Alumni with valid Riot Games accounts to sign up.\n\nI utilized the Riot Games API to fetch the current ranks of each player and stored them in a database. Initially, every user's rank was being updated on each render and I decided to add in an update button to speed up the initial call to the database. \n\n Overall it was a fun project and my first time working with NextJS which I have come to use as my default framework for most of my new and personal projects.`}/>
      <Project 
        title={'The Weeble'} 
        alignmentLeft={false} 
        url={"https://theweeble.com"} 
        description={`When I was younger, I watched a lot of anime on TV so I thought it would be fun to create a wordle-inspired game where users have to guess what show an intro song is from. \n\nI didn't want users to have to sign up in order to keep track of their scores so I used local storage to track their scores along with whether or not they had completed the daily game.\n\nI used D3 to visualize the scores in a sideways bar graph and I created a puppeteer webscraper to populate a json file with several hundred anime openings.\n\n This project was a lot of fun and my first time using D3 and puppeteer for webscraping, I decided against using a database because it didn't seem necessary as I already had a JSON file with all of the songs and there was no benefit for users in creating an account.`}/>
      <Project 
        title={'TCCG'} 
        alignmentLeft={true} 
        url={"https://tccginc.com"} 
        description={`In High School I did some work from time to time with a local technology consulting company and they reached out to me following my college graduation and asked me to build them a new website.\n\n`}/>
      
      {/* <Project title={'SolidRewind'} alignmentLeft={false} url={"https://vandytft.com"} description=""/> */}
   </div>
  );
}
