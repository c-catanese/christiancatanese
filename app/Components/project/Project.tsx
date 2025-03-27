"use client";
import styles from "./project.module.scss";
import React, { useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  alignmentLeft: boolean;
}


export default function Project({ title, description, url, alignmentLeft }: ProjectProps) {
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
        <iframe className={styles.iframeSizing} src={url} title="Helpful Widget" />
        {isHovered && (
          <div className={styles.overlay}>
            <p>Technologies Used</p>
          </div>
        )}
      </div>
    </div>
  );
}
