import styles from "./Loader.module.css";
import loader from "images/orange_circles.gif"
export default function Loader() {
  return (
    <div className={`${styles.loader}`} r>
      <img src={loader.src} width="70px" height="70px"/>
    </div>
  );
}
