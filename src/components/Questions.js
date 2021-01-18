import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../styles/questions.module.css";

export default function Questions({ questionIds = [] }) {
  return (
    <div>
      {!questionIds.length ? (
        <p className={styles.empty}>No questions yet</p>
      ) : (
        questionIds.map((id) => (
          <Link key={id} to={`/questions/${id}`} className={styles.link}>
            <Question id={id} />
          </Link>
        ))
      )}
    </div>
  );
}

function Question({ id }) {
  const { question, user } = useSelector(({ users, questions }) => {
    const question = questions[id];
    const user = users[question.author];
    return {
      question,
      user,
    };
  });

  return (
    <div className={styles.card}>
      <div>
        <h4>{user.name} asks:</h4>
      </div>
      <div className={styles.itemContent}>
        <img src={user.avatarURL} alt={user.name} className={styles.avatar} />
        <div className={styles.right}>
          <h4>Would you rather</h4>
          <p>{question.optionOne.text}</p>
          <small className={styles.or}>Or</small>
          <p>{question.optionTwo.text}</p>
        </div>
      </div>
    </div>
  );
}
