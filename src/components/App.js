import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import FoF from "./FOF";
import Poll from "./Poll";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import styles from "../styles/app.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleInitialData } from "../redux/actions/shared";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

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
            <Route path="/questions/:question_id">
              <Poll />
            </Route>
            <Route path="/add">
              <NewQuestion />
            </Route>
            <Route path="/leaderboard">
              <LeaderBoard />
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
