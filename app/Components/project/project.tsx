"use client";
import styles from "./project.module.scss";
import React, { useState, useEffect } from "react";

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  alignmentLeft: boolean;
}


export default function Project({ title, description, url, alignmentLeft }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleMouseHover = (status: boolean) => {
    setIsHovered(status);
  };

  useEffect(() => {
    if (expanded) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
      return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [expanded]);

  
  const expandProject = () => {
    setExpanded(!expanded)
    handleMouseHover(false)
  }

  return (
    <div className={`${styles.projectRow} ${alignmentLeft ? styles.leftAligned : ""}`}>
      <div className={styles.textWrapper} >
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
        className={`${styles.imageWrapper} ${expanded ? styles.expanded : ""}`}
        onMouseEnter={() => handleMouseHover(true)}
        onMouseLeave={() => handleMouseHover(false)}
      >
      {expanded ? (
  <div className={`${styles.expandedWrapper}`}>
    <button className={styles.closeButton} onClick={expandProject}>X</button>
    <iframe
      className={`${styles.iframeSizing} ${styles.expanded}`}
      src={url}
      title="project"
    />
  </div>
) : (
  <>
    <iframe
      className={styles.iframeSizing}
      src={url}
      title="project"
    />
    {isHovered && (
      <div className={styles.overlay}>
        <p>Technologies Used</p>
        <button onClick={expandProject}>See More</button>
      </div>
    )}
  </>
)}

      </div>
    </div>
  );
}
