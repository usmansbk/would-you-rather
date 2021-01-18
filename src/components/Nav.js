import clsx from "clsx";
import LoadingBar from "react-redux-loading";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authedUser";
import styles from "../styles/nav.module.css";

export default function Nav() {
  const dispatch = useDispatch();
  const user = useSelector(({ users, authedUser }) => users[authedUser]);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={styles.nav}>
      <LoadingBar />
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
            <li className={clsx(styles.item, styles["right-item"], styles.btn)}>
              <span className={styles.link} onClick={handleLogout}>
                Logout
              </span>
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
