import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAddQuestion } from "../redux/actions/questions";
import styles from "../styles/newquestion.module.css";

export default function NewQuestion() {
  const dispatch = useDispatch();

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const onChangeOptionOne = (e) => setOptionOne(e.target.value);
  const onChangeOptionTwo = (e) => setOptionTwo(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      handleAddQuestion({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
      })
    );

    setOptionOne("");
    setOptionTwo("");
  };

  return (
    <>
      <h2>Create New Question</h2>
      <p>Complete the questions:</p>

      <h4>Would you rather...</h4>
      <form onSubmit={onSubmit}>
        <input
          value={optionOne}
          onChange={onChangeOptionOne}
          className={styles.input}
          type="text"
          placeholder="Enter Option One Text Here"
        />
        <h4 className={styles.or}>OR</h4>
        <input
          value={optionTwo}
          onChange={onChangeOptionTwo}
          className={styles.input}
          type="text"
          placeholder="Enter Option Two Text Here"
        />
        <input
          disabled={!(optionOne && optionTwo)}
          className={styles.btn}
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
}
