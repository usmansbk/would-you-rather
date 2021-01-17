import clsx from "clsx";
import styles from "../styles/question.module.css";
import YourVote from "../assets/vote.png";

export default function Question() {
  return (
    <div className={styles.container}>
      <Unanswered />
      <Answered />
    </div>
  );
}

function Unanswered() {
  return (
    <div className={styles.content}>
      <h4>Tyler McGinnis asks:</h4>
      <img
        src={"https://i.pravatar.cc/300"}
        alt={"Sarah"}
        className={styles.avatar}
      />
      <h2>Would You Rather</h2>
      <form>
        <div className={styles.radio}>
          <input type="radio" id="questionOne" value="optionOne" />
          <label className={styles.label} htmlFor="questionOne">
            be a front-end developer
          </label>
        </div>
        <div className={styles.radio}>
          <input type="radio" id="questionTwo" value="optionTwo" />
          <label className={styles.label} htmlFor="questionTwo">
            be a back-end developer
          </label>
        </div>
      </form>
      <input type="button" value="Submit" className={styles.btn} />
    </div>
  );
}

function Answered() {
  return (
    <div className={styles.content}>
      <h4>Added by Joao Gabriel Olivel</h4>
      <img
        src={"https://i.pravatar.cc/300"}
        alt={"Sarah"}
        className={styles.avatar}
      />
      <h4>Would you rather</h4>
      <div className={styles.row}>
        <QuestionBox
          percent="66.7%"
          count="2 out of 3"
          question="find $50 yourself?"
          voted
        />
        <QuestionBox
          percent="33.3%"
          count="1 out of 3"
          question="have your best friend find $500?"
        />
      </div>
    </div>
  );
}

function QuestionBox({ voted, percent, count, question }) {
  return (
    <div className={clsx(styles.box, voted && styles.voted)}>
      <h2>{percent}</h2>
      <span className={styles.count}>{count}</span>
      <p className={styles.question}>{question}</p>
      {voted && (
        <img src={YourVote} alt="Your vote" className={styles.yourVote} />
      )}
    </div>
  );
}
