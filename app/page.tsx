"use client";
import styles from "./Home.module.scss";
import Footer from "./Components/footer/footer"
export default function Home() {
  // let shadow = "";
  // for (let i = 0; i < 20; i++) {
  //   shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 rgb(13 148 136)";
  // }

  return (
    <div className={styles.mainContainer}>
      <main className={styles.mainContent}>
        <div className={styles.textContainer}>
          <h1 className={`${styles.title} ${styles.animateFadeInOut}`}>Christian Catanese</h1>
          <div className={`${styles.subtitleWrapper} ${styles.animateWidthReveal}`}>
            <h2 className={`${styles.subtitle} ${styles.animateSlideIn}`}>Software Engineer</h2>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  );
}
