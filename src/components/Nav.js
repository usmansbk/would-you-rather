import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "../styles/nav.module.css";

export default function Nav() {
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("logout");
  };
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            className={styles.link}
            exact
            activeClassName={styles.active}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={styles.link}
            to="/add"
            activeClassName={styles.active}
          >
            New Question
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={styles.link}
            to="/leaderboard"
            activeClassName={styles.active}
          >
            Leader Board
          </NavLink>
        </li>
        <li className={clsx(styles.item, styles["right-item"])}>
          <a href="#logout" className={styles.link} onClick={handleLogout}>
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
