"use client";

import "./globals.css";
import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./layout.module.css";

import { useEffect } from "react";
import { usePathname } from "next/navigation";


export default function RootLayout({ children }) {
  const pathname = usePathname();

  // force scroll to top of page on navigation (issue: https://github.com/vercel/next.js/issues/28778)
  useEffect(() => window.scroll(0, 0), [pathname]);

  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
