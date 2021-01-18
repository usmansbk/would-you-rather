import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import styles from "../styles/nav.module.css";

export default function Nav() {
  const user = useSelector(({ users, authedUser }) => users[authedUser]);

  return (
    <nav className={styles.nav}>
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
        {!!user && (
          <>
            <li className={clsx(styles.item, styles["right-item"])}>
              <NavLink href="#logout" className={styles.link} to="/login">
                Logout
              </NavLink>
            </li>
            <li className={styles["right-item"]}>
              <span className={styles.link}>{user.name}</span>
            </li>
            <li className={styles["right-item"]}>
              <img
                src={user.avatarURL}
                alt="avatar"
                className={styles.avatar}
              />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
