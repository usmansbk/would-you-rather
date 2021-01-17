import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import FoF from "./FOF";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <FoF />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
