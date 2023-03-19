import React from "react";
import styles from "./FooterLink.module.css";

export default function FooterLink({ url, children }) {
  return (
    <a href={url} target="_blank" className={styles.link} rel="noreferrer">
      {children}
    </a>
  );
}
