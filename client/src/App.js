import {useState,useEffect} from "react";
import Home from "./components/hero/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Profile/Dashboard";
import EditProfile from "./components/Profile/EditProfile";
import Explore from "./components/Profile/Explore";




function App() {
  const [user, setUser] = useState({});
  const updateUser = (user) => setUser(user);

useEffect(() => {
  fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);

 return (
  <Routes>
    <Route path="/" element={<Home  updateUser={updateUser} />}/>
    <Route path="/profile" element={<Dashboard user={user} setUser={setUser} />}>
      <Route path="edit" element={<EditProfile />}/>
      <Route path="explore" element={<Explore />}/>
    </Route>
  </Routes>
)

}

export default App;
