import React from "react";
import styles from "./NotFoundPage.module.css";
import NotFoundPageData from "./NotFoundPage.data";

export default function MovieNotFound() {
  return (
    <div className={styles.notFoundPage}>
      <h1>{NotFoundPageData.movieNotFound}</h1>
    </div>
  );
}
