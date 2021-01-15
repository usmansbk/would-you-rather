import logo from "../assets/hands.png";
import "../styles/login.css";

export default function Login() {
  return (
    <div className="container">
      <div className="content">
        <div className="center">
          <h3 className="welcome-title">
            Welcome to the Would You Rather App!
          </h3>
          <h5 className="subtitle">Please sign in to continue</h5>
        </div>
        <img alt="logo" src={logo} className="logo" />
        <h2 className="title">Sign In</h2>
        <form>
          <label>
            User:
            <select>
              <option value="default">Usman</option>
            </select>
          </label>
          <button className="btn">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}
