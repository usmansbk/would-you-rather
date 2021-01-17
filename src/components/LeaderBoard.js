import styles from "../styles/leaderboard.module.css";

export default function Leaderboard() {
  return (
    <>
      <User />
    </>
  );
}

function User({ avatarURL, name }) {
  return (
    <div className={styles.card}>
      <img
        src="https://i.pravatar.cc/300"
        alt={name}
        className={styles.avatar}
      />
      <div className={styles.container}>
        <h3>Sarah Edo</h3>
        <div className={styles.stat}>
          <span>Answered questions</span>
          <span className={styles.count}>7</span>
        </div>
        <div className={styles.stat}>
          <span>Created questions</span>
          <span className={styles.count}>3</span>
        </div>
      </div>
      <div className={styles.scoreContainer}>
        <h4>Score</h4>
        <div className={styles.score}>
          <h3>10</h3>
        </div>
      </div>
    </div>
  );
}
