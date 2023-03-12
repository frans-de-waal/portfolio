"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log("menuOpen", menuOpen);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>
        Frans de Waal
      </Link>
      <nav>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoMenu size="2rem" />
        </button>
        <ul className={`${styles.navList} ${menuOpen ? styles.open : ""}`}>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
