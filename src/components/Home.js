import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#unanswered" className={styles.link}>
              Unanswered Questions
            </a>
          </li>
          <li className={styles.item}>
            <a href="#answered" className={styles.link}>
              Answered Questions
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
