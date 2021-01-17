import styles from "../styles/question.module.css";

export default function Question() {
  return (
    <div className={styles.container}>
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
    </div>
  );
}
