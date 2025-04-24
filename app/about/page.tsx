"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import Footer from "../Components/footer/footer";


export default function About() {

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.topRow}>
        <Image
          width={320}
          height={320}
          className={styles.headshot}
          src={'/headshot.jpeg'}
          alt="picture"
        />
        <p className={styles.topRowText}>Hi I&apos;m Christian Catanese a Software Engineer from South Florida. <br/><br/>This website is meant to be a place to keep track of my projects and for people to learn a little more about me.</p>
      </div>
      <div className={styles.textBlock}>
        <h2 className={styles.heading}>Skills:</h2>
        <p>React, NextJS, SolidJS, Javascript, HTML/CSS, Express, NodeJS, PostgreSQL, <br/> Git, NoSQL, Webpack, React Native/Expo, Redux, Bcrypt, Typescript, Oauth, Vercel</p>
      </div>
      <div className={styles.textBlock}>
        <h2 className={styles.heading}>Education:</h2>
        <p>Vanderbilt University (2019 - 2022)</p>
      </div>

      <div className={styles.textBlock}>
        <h2 className={styles.heading}>Experience: Politix TV (2023 - Present)</h2>
        <p>Built reusable React components and utilized React Router to create an intuitive navigation experience within
        the web app, promoting code modularity and efficient user flow.<br/><br/></p>
        <p>Implemented styles from Figma, following design guidelines, and effectively managed project tasks using Jira
        workflow, ensuring a visually consistent and user-friendly interface while meeting project deadlines.<br/><br/></p>
        <p>Connected the React frontend with a Django/Postgres backend through API integrations, enabling robust
        data retrieval, real-time updates, and enhanced application performance.<br/><br/></p>
        <p>Implemented responsive design principles, ensuring optimal performance and user experience across various
        devices and screen sizes, while actively participating in code reviews and providing constructive feedback to
        maintain code quality standards. <br/><br/></p>
        <p>Developed a real-time chat feature using WebSockets, enabling instant messaging, and implemented live
        streaming functionality utilizing the Livepeer API to provide high-quality video streaming capabilities. <br/><br/></p>
        <p>Collaborated with the executive team on customer acquisition strategies and worked closely with streamers
        to refine UI/UX, fostering a seamless and engaging user experience. <br/> <br/></p>
        <p>Integrated Stripe payment processing to support subscription-based features, offering users flexible options
        for temporary checkouts or saving payment methods for future transactions.<br/> <br/></p>
        <p>Led an initiative to rebuild the application in React Native Expo with Typescript to develop a cross platform
        app for users to interact with on both Android and IOS devices. <br/></p>
        
      </div>

      <Footer/>
    </div>
  );
}
