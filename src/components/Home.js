import clsx from "clsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import Questions from "./Questions";
import styles from "../styles/home.module.css";

const ANSWERED = "answered";
const UNANSWERED = "unanswered";

export default function Home() {
  const [filter, setFilter] = useState(UNANSWERED);

  const questionIds = useSelector(({ questions, users, authedUser }) => {
    const user = users[authedUser];
    return Object.keys(questions)
      .filter((id) => {
        const answerIds = Object.keys(user.answers);
        if (filter === ANSWERED) {
          return answerIds.includes(id);
        } else {
          return !answerIds.includes(id);
        }
      })
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  });

  const changeFilter = (e, value) => {
    e.preventDefault();
    setFilter(value);
  };

  return (
    <div className={styles.content}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              href="#unanswered"
              className={clsx(
                styles.link,
                filter === UNANSWERED && styles.active
              )}
              onClick={(e) => changeFilter(e, UNANSWERED)}
            >
              Unanswered Questions
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="#answered"
              className={clsx(
                styles.link,
                filter === ANSWERED && styles.active
              )}
              onClick={(e) => changeFilter(e, ANSWERED)}
            >
              Answered Questions
            </a>
          </li>
        </ul>
      </nav>
      <Questions questionIds={questionIds} />
    </div>
  );
}
