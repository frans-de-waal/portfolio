import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoDownloadOutline,
  IoAtOutline,
} from "react-icons/io5";
import FooterLink from "./FooterLink";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <FooterLink url="https://www.linkedin.com/in/frans-de-waal">
        <IoLogoLinkedin size="2rem" />
        <span>LinkedIn</span>
      </FooterLink>
      <FooterLink url="https://github.com/frans-de-waal">
        <IoLogoGithub size="2rem" />
        <span>GitHub</span>
      </FooterLink>
      <FooterLink url="CV-Frans-de-Waal.pdf">
        <IoDownloadOutline size="2rem" />
        <span>CV</span>
      </FooterLink>
      <FooterLink url="mailto:fmdewaal@gmail.com">
        <IoAtOutline size="2rem" />
        <span>fmdewaal@gmail.com</span>
      </FooterLink>
    </footer>
  );
}
