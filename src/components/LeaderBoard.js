import { useSelector } from "react-redux";
import styles from "../styles/leaderboard.module.css";

export default function Leaderboard() {
  const users = useSelector((state) => state.users);
  return (
    <>
      {Object.values(users)
        .sort((a, b) => {
          const aAnswers = Object.keys(a.answers).length;
          const aQuestions = a.questions.length;
          const bAnswers = Object.keys(b.answers).length;
          const bQuestions = b.questions.length;

          return bAnswers + bQuestions - (aAnswers + aQuestions);
        })
        .map((user) => (
          <User key={user.id} {...user} />
        ))}
    </>
  );
}

function User({ avatarURL, name, questions, answers }) {
  const answerCount = Object.keys(answers).length;
  const questionCount = questions.length;
  return (
    <div className={styles.card}>
      <img src={avatarURL} alt={name} className={styles.avatar} />
      <div className={styles.container}>
        <h3>{name}</h3>
        <div className={styles.stat}>
          <span>Answered questions</span>
          <span className={styles.count}>{answerCount}</span>
        </div>
        <div className={styles.stat}>
          <span>Created questions</span>
          <span className={styles.count}>{questionCount}</span>
        </div>
      </div>
      <div className={styles.scoreContainer}>
        <h4>Score</h4>
        <div className={styles.score}>
          <h3>{answerCount + questionCount}</h3>
        </div>
      </div>
    </div>
  );
}
