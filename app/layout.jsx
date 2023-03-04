import "./globals.css";
import Header from "./Header";
import styles from "./layout.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header>Top Nav</Header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
