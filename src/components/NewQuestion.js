import styles from "../styles/newquestion.module.css";

export default function NewQuestion() {
  const _onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.content}>
      <h2>Create New Question</h2>
      <p>Complete the questions:</p>

      <h4>Would you rather...</h4>
      <form>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Option One Text Here"
        />
        <h4 className={styles.or}>OR</h4>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Option Two Text Here"
        />
        <input
          onClick={_onSubmit}
          className={styles.btn}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
