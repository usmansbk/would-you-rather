import clsx from "clsx";
import { useState } from "react";
import styles from "../styles/home.module.css";
import Questions from "./Questions";

const ANSWERED = "answered";
const UNANSWERED = "unanswered";

export default function Home() {
  const [tab, setTab] = useState(UNANSWERED);

  const _goTo = (e, tab) => {
    e.preventDefault();
    setTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <nav>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a
                href="#unanswered"
                className={clsx(
                  styles.link,
                  tab === UNANSWERED && styles.active
                )}
                onClick={(e) => _goTo(e, UNANSWERED)}
              >
                Unanswered Questions
              </a>
            </li>
            <li className={styles.item}>
              <a
                href="#answered"
                className={clsx(styles.link, tab === ANSWERED && styles.active)}
                onClick={(e) => _goTo(e, ANSWERED)}
              >
                Answered Questions
              </a>
            </li>
          </ul>
        </nav>
        <Questions />
      </div>
    </div>
  );
}
