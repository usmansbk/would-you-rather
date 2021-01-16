import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#home">New Question</a>
        </li>
        <li>
          <a href="#home">Leader Board</a>
        </li>
        <li className={styles["right-item"]}>
          <a href="#home">Logout</a>
        </li>
        <li className={styles["right-item"]}>
          <span>Usman Suleiman</span>
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
