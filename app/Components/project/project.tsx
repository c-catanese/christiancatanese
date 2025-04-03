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
        <h2 className={styles.projectTitle}>{title}</h2>
        <p>
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>

      <div
        className={styles.imageWrapper}
        onMouseEnter={() => handleMouseHover(true)}
        onMouseLeave={() => handleMouseHover(false)}
      >
        <iframe className={styles.iframeSizing} src={url}  title="project" />
        {isHovered && (
          <div className={styles.overlay}>
            <p>Technologies Used</p>
            <button>See More</button>
          </div>
        )}
      </div>
    </div>
  );
}
