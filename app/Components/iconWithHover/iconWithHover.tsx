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
    <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
    >
    <div 
        className={styles.container}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>

        <Image className={styles.icon} width={50} height={50} alt={text} src={img} />
      {isHovered && <span className={styles.hoverText}>{text}</span>}
    </div>
    </a>

  );
}
