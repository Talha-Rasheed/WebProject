import "./App.css";
import Home from "./Home";
import { TextField } from "./TextField";
import SignUp from "./SignUp";
import List from "./List";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import Order from "./Order";
import AllUser from "./AllUser";
import Updation from "./Updation";
function App() {
  const [data, setData] = useState([]);
  return (
    <Router>
      <Switch>
        <Route path="/UpdateUser/:id">
          <Updation />
        </Route>
        <Route path="/AllUser">
          <AllUser />
        </Route>
        <Route path="/Order">
          <Order />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route path="/List">
          <List people={data} />
        </Route>
        <Route
          path="/SignUp"
          render={(props) => (
            <SignUp transferData={(d) => setData(d)} data={data} />
          )}
        />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
