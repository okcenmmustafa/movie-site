import styles from "components/Tapbar.module.scss";
import Search from "components/Search";
import Link from "next/link";
const Tapbar = () => {
  return (
    <div className={styles.tapbarContainer}>
      <Link href={"/"}>
        <span className={styles.nav}>Homepage</span>
      </Link>

      <Link href={"/stats"}>
        <span className={styles.nav}>Stats</span>
      </Link>
      <div className={styles.search}>
        <Search />
      </div>
    </div>
  );
};

export default Tapbar;
