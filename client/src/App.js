import {useState,useEffect} from "react";
import Home from "./components/hero/Home";
// import { BrowserRouter } from 'react-router-dom';
//import Dashboard from "./components/Profile/Dashboard";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Profile/Dashboard";
function App() {
  const [user, setUser] = useState({});
  const updateUser = (user) => setUser(user);
useEffect(() => {
  // auto-login
  fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);

 return (
  <Switch>
    <Route exact path="/">
      <Home  updateUser={updateUser} />
    </Route>
    <Route exact path="/profile">
      <Dashboard  />
    </Route>
  </Switch>
)

}

export default App;
