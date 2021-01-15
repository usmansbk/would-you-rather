import logo from "../assets/hands.png";
import "../styles/login.css";
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
    <div className="container">
      <div className="content">
        <div className="header">
          <h3 className="title">Welcome to the Would You Rather App!</h3>
          <h5 className="subtitle">Please sign in to continue</h5>
        </div>

        <img alt="logo" src={logo} className="logo" />
        <h2 className="title">Sign In</h2>
        <form onSubmit={onSubmit}>
          <select>
            {Object.keys(options).map((id) => (
              <option value={id} key={id}>
                {options[id].name}
              </option>
            ))}
          </select>
          <input type="submit" value="Sign In" className="btn" />
        </form>
      </div>
    </div>
  );
}
