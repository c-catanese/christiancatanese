"use client";

import { useRouter } from 'next/navigation';
import styles from "./header.module.scss"


export default function Header() {
  const router = useRouter(); 
  
  return (
    <div className={styles.container}>
      <button onClick={() => router.push('/')} className={styles.pageLink}>
        Home
      </button>
      <button onClick={() => router.push('/about')} className={styles.pageLink}>
        About
      </button>
      <button onClick={() => router.push('/projects')} className={styles.pageLink}>
        Projects
      </button>
      <button onClick={() => router.push('/blog')}className={styles.pageLink}>
        Blog
      </button>
    </div>
  );
}
