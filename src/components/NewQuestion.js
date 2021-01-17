import styles from "../styles/newquestion.module.css";

export default function NewQuestion() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h2>Create New Question</h2>
      <p>Complete the questions:</p>

      <h4>Would you rather...</h4>
      <form onSubmit={onSubmit}>
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
        <input className={styles.btn} type="submit" value="Submit" />
      </form>
    </>
  );
}
