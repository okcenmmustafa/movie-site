import React from "react";
import styles from "./NotFoundPage.module.css";


import Link from "next/link";
import AppTemplate from "features/templates/AppTemplate";
import NotFoundPageData from "./NotFoundPage.data";

export default function NotFoundPage() {
  return (
    <AppTemplate>
      <div className={styles.notFoundPage}>
      Not Found

        <h1>{NotFoundPageData.title}</h1>

        <Link href="/">
          <a className="button-primary">
            {NotFoundPageData.backButton}
          </a>
        </Link>
      </div>
    </AppTemplate>
  );
}
