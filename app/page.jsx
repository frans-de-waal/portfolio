import Image from "next/image";
import styles from "./page.module.css";
import portrait from "../public/images/frans-transparent-2.png";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.col}>
          <h2>
            Hi, my name is <strong>Frans</strong>.
          </h2>
          <h1>
            I&apos;m a <strong>full stack developer</strong> specializing in{" "}
            <strong>web and mobile apps</strong>.
          </h1>
        </div>
        <div className={styles.circle}>
          <Image
            src={portrait}
            alt="Portrait of Frans"
            priority
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
      <h2>Featured Projects</h2>
    </>
  );
}
