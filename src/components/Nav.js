import clsx from "clsx";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#home" className={styles.text}>
            Home
          </a>
        </li>
        <li className={styles.item}>
          <a href="#home" className={styles.text}>
            New Question
          </a>
        </li>
        <li className={styles.item}>
          <a href="#home" className={styles.text}>
            Leader Board
          </a>
        </li>
        <li className={clsx(styles.item, styles["right-item"])}>
          <a href="#home" className={styles.text}>
            Logout
          </a>
        </li>
        <li className={styles["right-item"]}>
          <span className={styles.text}>Usman Suleiman</span>
        </li>
        <li className={styles["right-item"]}>
          <img
            src="https://i.pravatar.cc/300"
            alt="avatar"
            className={styles.avatar}
          />
        </li>
      </ul>
    </nav>
  );
}
