"use client"
import Image from "next/image";
import React, { useState } from "react";

export default function Projects() {
  const [isHoveredVandyTFT, setIsHoveredVandyTFT] = useState(false);
  const [isHoveredWeeble, setIsHoveredWeeble] = useState(false);

  const handleMouseHover = (project: string, status: boolean) => {
    if (project === 'VandyTFT') setIsHoveredVandyTFT(status);
    if (project === 'Weeble') setIsHoveredWeeble(status);
  };


  return (
    <div className="bg-main w-full h-[calc(100%-64px)] pt-16">
      <div className="flex items-center justify-center">
        <div
          className="relative w-[500px] h-[461.17px]"
          onMouseEnter={() => handleMouseHover('VandyTFT', true)}
          onMouseLeave={() => handleMouseHover('VandyTFT', false)}
        >
          <Image
            className="rounded-xl"
            width={500}
            height={500}
            src="/vandytft.png"
            alt="project"
          />
          {isHoveredVandyTFT && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-xl">
              <p className="text-white text-xl">Technologies Used</p>
            </div>
          )}
        </div>
        <div className="text-black w-[500px] h-[500px] pt-10 flex flex-col justify-start items-start">
          <h2 className="ml-10">Vandy TFT</h2>
          <p className="ml-10 mt-5">
            As a Vanderbilt Alumni and multiple time winner of the Intramural TFT tournament, I built a leaderboard for students to be able to compare ranks and find other students to play with.
            <br/>
            <br/>
            I utilized the Riot Games API to fetch the current ranks of each player. Originally it was updating the entire database on page load but I changed it to use an update button so that the leaderboard would render faster. 
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-black w-[500px] h-[500px] pt-10 flex flex-col justify-start items-start">
          <h2 className="mr-10">The Weeble</h2>
          <p className="mr-10 mt-5">
            As a child I loved watching animes and I've always had an appreciation for the music associated with different shows. I wanted to make a game where users could guess what show a song was from so I did!
            <br/>
            <br/>
            I populated a json file using a web scraper I built in node and puppeteer and each day the site updates to give users a new anime to guess.
            <br/>
            <br/>
            Each user's previous scores are stored in local storaged and visualized on a bar graph built with D3. 
          </p>
        </div>
        <div
          className="relative w-[500px] h-[461.17px]"
          onMouseEnter={() => handleMouseHover('Weeble', true)}
          onMouseLeave={() => handleMouseHover('Weeble', false)}
        >
          <Image
            className="rounded-xl fit-content"
            width={500}
            height={500}
            src="/weeble.png"
            alt="project2"
          />
          {isHoveredWeeble && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-xl">
              <p className="text-white text-xl">Technologies Used</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}