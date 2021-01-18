import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { setAuthedUser } from "../redux/actions/authedUser";
import styles from "../styles/login.module.css";
import logo from "../assets/logo.png";

export default function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [value, setValue] = useState("");
  const users = useSelector((state) => state.users);

  const { from } = location.state || { from: { pathname: "/" } };

  const handleChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(value));
    history.replace(from);
  };

  return (
    <div className={styles.content}>
      <h2>Welcome to the Would You RatherApp!</h2>
      <p>Please sign in to continue</p>

      <img alt="logo" src={logo} className={styles.logo} />
      <h2 className={styles.title}>Sign In</h2>
      <form onSubmit={onSubmit}>
        <select className={styles.select} value={value} onChange={handleChange}>
          <option>Select User</option>
          {Object.keys(users).map((id) => (
            <option value={id} key={id}>
              {users[id].name}
            </option>
          ))}
        </select>
        <input
          disabled={!value}
          className={styles.btn}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
