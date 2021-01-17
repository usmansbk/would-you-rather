import { Link } from "react-router-dom";
import styles from "../styles/questions.module.css";

export default function Questions() {
  return (
    <div>
      <Link to="/questions/:id" className={styles.link}>
        <Question />
      </Link>
    </div>
  );
}

function Question() {
  return (
    <div className={styles.card}>
      <div>
        <h4>Sarah Edo asks:</h4>
      </div>
      <div className={styles.itemContent}>
        <img
          src={"https://i.pravatar.cc/300"}
          alt={"Sarah"}
          className={styles.avatar}
        />
        <div className={styles.right}>
          <h4>Would you rather</h4>
          <p>find $50 yourself</p>
          <small className={styles.or}>Or</small>
          <p>have your best friend find $500</p>
        </div>
      </div>
    </div>
  );
}
