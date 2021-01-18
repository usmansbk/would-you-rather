import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../styles/login.module.css";

export default function Login() {
  const location = useLocation();
  const history = useHistory();
  const users = useSelector((state) => state.users);

  const { from } = location.state || { from: { pathname: "/" } };

  const onSubmit = (e) => {
    e.preventDefault();
    history.replace(from);
  };

  return (
    <div className={styles.content}>
      <h2>Welcome to the Would You RatherApp!</h2>
      <p>Please sign in to continue</p>

      <img alt="logo" src={logo} className={styles.logo} />
      <h2 className={styles.title}>Sign In</h2>
      <form onSubmit={onSubmit}>
        <select className={styles.select}>
          {Object.keys(users).map((id) => (
            <option value={id} key={id}>
              {users[id].name}
            </option>
          ))}
        </select>
        <input
          className={styles.btn}
          type="submit"
          value="Submit"
          onSubmit={onSubmit}
        />
      </form>
    </div>
  );
}
