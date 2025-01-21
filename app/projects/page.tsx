"use client"
import Image from "next/image";
import React, { useState } from "react";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("Image hovered!");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log("Hover ended.");
  };


  return (
    <div className="bg-main w-full h-[calc(100%-64px)] pt-16">
      <div className="flex items-center justify-center">
        <div
          className="relative w-[500px] h-[461px]" // Parent container
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="rounded-xl"
            width={500}
            height={500}
            src="/vandytft.png"
            alt="project"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-xl">
              <p className="text-white text-xl">Hovered!</p>
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
    </div>
  );
}