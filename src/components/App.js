import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-redux-loading";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import FoF from "./FOF";
import Poll from "./Poll";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import styles from "../styles/app.module.css";
import { handleInitialData } from "../redux/actions/shared";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loadingBar.default);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  if (loading) {
    return <LoadingBar />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <PrivateRoute path="/" exact>
              <Home />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/questions/:question_id">
              <Poll />
            </PrivateRoute>
            <PrivateRoute path="/add">
              <NewQuestion />
            </PrivateRoute>
            <PrivateRoute path="/leaderboard">
              <LeaderBoard />
            </PrivateRoute>
            <PrivateRoute path="*">
              <FoF />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  const authedUser = useSelector(({ authedUser }) => authedUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authedUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
