import clsx from "clsx";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FOF from "./FOF";
import styles from "../styles/question.module.css";
import { formatOption } from "../api/helpers";
import { handleAnswerQuestion } from "../redux/actions/questions";
import Voted from "../assets/voted.png";

export default function Question() {
  const { question_id: id } = useParams();
  const { question, by, authedUser } = useSelector(
    ({ users, questions, authedUser }) => ({
      question: questions[id],
      by: users[questions[id]?.author],
      authedUser: users[authedUser],
    })
  );

  if (!question) {
    return <FOF />;
  }

  const isAnswered = Object.keys(authedUser.answers).includes(id);
  const Component = isAnswered ? Answered : Unanswered;
  return (
    <Component
      question={question}
      by={by}
      authedUser={authedUser}
      voted={authedUser.answers[id]}
    />
  );
}

function Unanswered({ by, question, authedUser }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const onSubmit = () => {
    dispatch(
      handleAnswerQuestion({
        qid: question.id,
        answer: value,
        authedUser: authedUser.id,
      })
    );
  };

  return (
    <>
      <h4>{by.name} asks:</h4>
      <img src={by.avatarURL} alt={by.name} className={styles.avatar} />
      <h2>Would You Rather</h2>
      <form>
        <div className={styles.radio}>
          <input
            type="radio"
            checked={value === "optionOne"}
            onChange={() => setValue("optionOne")}
          />
          <label className={styles.label} htmlFor="questionOne">
            {question.optionOne.text}
          </label>
        </div>
        <div className={styles.radio}>
          <input
            type="radio"
            checked={value === "optionTwo"}
            onChange={() => setValue("optionTwo")}
          />
          <label className={styles.label} htmlFor="questionTwo">
            {question.optionTwo.text}
          </label>
        </div>
      </form>
      <input
        disabled={!value}
        onClick={onSubmit}
        type="button"
        value="Submit"
        className={styles.btn}
      />
    </>
  );
}

function Answered({ question, by, voted }) {
  return (
    <>
      <h4>Added by {by.name}</h4>
      <img src={by.avatarURL} alt={by.name} className={styles.avatar} />
      <h4>Would you rather</h4>
      <div className={styles.row}>
        <QuestionBox
          question={question}
          value="optionOne"
          voted={voted === "optionOne"}
        />
        <div className={styles.or}>
          <h3>OR</h3>
        </div>
        <QuestionBox
          question={question}
          value="optionTwo"
          voted={voted === "optionTwo"}
        />
      </div>
    </>
  );
}

function QuestionBox({ question, value, voted }) {
  const { percent, count, total, text } = formatOption(question, value);
  return (
    <div className={clsx(styles.box, voted && styles.voted)}>
      {voted && <img src={Voted} alt="I voted" className={styles.votedImage} />}
      <h2>{percent}</h2>
      <span className={styles.count}>
        {count} of {total}
      </span>
      <p className={styles.question}>{text}</p>
    </div>
  );
}
