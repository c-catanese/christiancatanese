import { useState } from "react";
import styles from "./iconWithHover.module.scss";
import Image from "next/image";

type IconWithHoverProps = {
  text: string;
  img: string;
  link: string;
};

export default function IconWithHover({ text, img, link }: IconWithHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.container}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image width={50} height={50} alt={text} src={img} />
      </a>
      {isHovered && <span className={styles.hoverText}>{text}</span>}
    </div>
  );
}
