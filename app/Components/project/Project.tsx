"use client";
import styles from "./Project.module.scss";
import React, { useState } from "react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  img: string;
  alignmentLeft: boolean;
}


export default function Project({ title, description, img, alignmentLeft }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseHover = (status: boolean) => {
    setIsHovered(status);
  };

  return (
    <div className={`${styles.projectRow} ${alignmentLeft ? styles.leftAligned : ""}`}>
      <div className={styles.textWrapper}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div
        className={styles.imageWrapper}
        onMouseEnter={() => handleMouseHover(true)}
        onMouseLeave={() => handleMouseHover(false)}
      >
        <Image className={styles.image} width={500} height={500} src={img} alt="project" />
        {isHovered && (
          <div className={styles.overlay}>
            <p>Technologies Used</p>
          </div>
        )}
      </div>
    </div>
  );
}
