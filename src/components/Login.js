import logo from "../assets/logo.png";
import styles from "../styles/login.module.css";
import * as API from "../api/_DATA";
import { useEffect, useState } from "react";

export default function Login() {
  const [options, setOptions] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    API._getUsers().then((users) => setOptions(users));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>Welcome to the Would You Rather App!</h3>
          <h5 className={styles.subtitle}>Please sign in to continue</h5>
        </div>

        <img alt="logo" src={logo} className={styles.logo} />
        <h2 className={styles.title}>Sign In</h2>
        <form onSubmit={onSubmit}>
          <select>
            {Object.keys(options).map((id) => (
              <option value={id} key={id}>
                {options[id].name}
              </option>
            ))}
          </select>
          <input type="submit" value="Sign In" className={styles.btn} />
        </form>
      </div>
    </div>
  );
}
