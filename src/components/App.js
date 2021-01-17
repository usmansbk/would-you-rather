import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import FoF from "./FOF";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import styles from "../styles/app.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/questions/:id">
              <Question />
            </Route>
            <Route path="/add">
              <NewQuestion />
            </Route>
            <Route path="*">
              <FoF />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
