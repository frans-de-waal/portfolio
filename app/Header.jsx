import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../public/favicon/android-chrome-512x512.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>
        <Image src={logo} alt="logo" width={30} height={30} />
        <span>Frans de Waal</span>
      </Link>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/cv">CV</Link>
        </li>
      </ul>
    </header>
  );
}
