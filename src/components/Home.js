import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Questions from "./Questions";
import styles from "../styles/home.module.css";
import { setFilter, ANSWERED, UNANSWERED } from "../redux/actions/shared";

export default function Home() {
  const dispatch = useDispatch();
  const [questionIds, filter] = useSelector(
    ({ questions, users, authedUser, appState }) => {
      const user = users[authedUser];
      return [
        Object.keys(questions)
          .filter((id) => {
            const answerIds = Object.keys(user.answers);
            if (appState.filter === ANSWERED) {
              return answerIds.includes(id);
            } else {
              return !answerIds.includes(id);
            }
          })
          .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        appState.filter,
      ];
    }
  );

  const changeFilter = (e, value) => {
    e.preventDefault();
    dispatch(setFilter(value));
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
