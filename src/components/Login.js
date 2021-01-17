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
    <div className={styles.content}>
      <h2>Welcome to the Would You RatherApp!</h2>
      <p>Please sign in to continue</p>

      <img alt="logo" src={logo} className={styles.logo} />
      <h2 className={styles.title}>Sign In</h2>
      <form onSubmit={onSubmit}>
        <select className={styles.select}>
          {Object.keys(options).map((id) => (
            <option value={id} key={id}>
              {options[id].name}
            </option>
          ))}
        </select>
        <input className={styles.btn} type="submit" value="Submit" />
      </form>
    </div>
  );
}
