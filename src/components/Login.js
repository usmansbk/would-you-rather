import logo from "../assets/hands.png";
import "../styles/login.css";

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

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
            <option value="default">Usman</option>
          </select>
          <input type="submit" value="Sign In" className="btn" />
        </form>
      </div>
    </div>
  );
}
