import Image from "next/image";
import styles from "./page.module.css";
import portrait from "../public/images/frans-transparent-2.png";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const PROJECTS = [
    {
      name: "OPFC Supporter App",
      image: "/images/projects/opfc.svg",
      summary:
        "The official supporter app for one of South Africa's oldest football clubs Orlando Pirates.",
      type: "Professional",
      tech: "React Native",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=com.orlandopiratesfc.mobileapp",
        ios: "https://apps.apple.com/za/app/orlando-pirates-official-app/id1469888955",
        web: "",
      },
    },
    {
      name: "OPFC Supporter App",
      image: "/images/projects/opfc.svg",
      summary:
        "The official supporter app for one of South Africa's oldest football clubs Orlando Pirates.",
      type: "Professional",
      tech: "React Native",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=com.orlandopiratesfc.mobileapp",
        ios: "https://apps.apple.com/za/app/orlando-pirates-official-app/id1469888955",
        web: "",
      },
    },
    {
      name: "OPFC Supporter App",
      image: "/images/projects/opfc.svg",
      summary:
        "The official supporter app for one of South Africa's oldest football clubs Orlando Pirates.",
      type: "Professional",
      tech: "React Native",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=com.orlandopiratesfc.mobileapp",
        ios: "https://apps.apple.com/za/app/orlando-pirates-official-app/id1469888955",
        web: "",
      },
    },
    {
      name: "OPFC Supporter App",
      image: "/images/projects/opfc.svg",
      summary:
        "The official supporter app for one of South Africa's oldest football clubs Orlando Pirates.",
      type: "Professional",
      tech: "React Native",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=com.orlandopiratesfc.mobileapp",
        ios: "https://apps.apple.com/za/app/orlando-pirates-official-app/id1469888955",
        web: "",
      },
    },
    {
      name: "OPFC Supporter App",
      image: "/images/projects/opfc.svg",
      summary:
        "The official supporter app for one of South Africa's oldest football clubs Orlando Pirates.",
      type: "Professional",
      tech: "React Native",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=com.orlandopiratesfc.mobileapp",
        ios: "https://apps.apple.com/za/app/orlando-pirates-official-app/id1469888955",
        web: "",
      },
    },
  ];

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
      <ul className={styles.projectList}>
        {PROJECTS.map((project) => {
          const urlKey = project.name.toLowerCase().replace(/\s/g, "-");
          return <ProjectCard key={urlKey} urlKey={urlKey} {...project} />;
        })}
      </ul>
    </>
  );
}
