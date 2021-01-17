import { NavLink as Link } from "react-router-dom";
import clsx from "clsx";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} activeClassName={styles.active} to="/">
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="/new">
            New Question
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="/new">
            Leader Board
          </Link>
        </li>
        <li className={clsx(styles.item, styles["right-item"])}>
          <a href="#home" className={styles.link}>
            Logout
          </a>
        </li>
        <li className={styles["right-item"]}>
          <span className={styles.link}>Usman Suleiman</span>
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
