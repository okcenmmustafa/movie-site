import React, { useEffect, useState } from "react";
import styles from "./AppTemplate.module.css";

export default function AppTemplate({ children }) {
  const [initialised, setInitialised] = useState(false);

  return (
    <div className={styles.mainComponent}>
      <div className={styles.appTemplate}>
        <main>
          <article className={styles.positionRelative}>{children}</article>
        </main>
      </div>
    </div>
  );
}
