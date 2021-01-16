import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.tabs}>
        <a className={styles.tab} href="#unanswered">
          Unanswered Questions
        </a>
        <a className={styles.tab} href="#unanswered">
          Answered Questions
        </a>
      </div>
    </div>
  );
}
