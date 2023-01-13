import {useState,useEffect} from "react";
import Home from "./components/hero/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Profile/Dashboard";
import EditProfile from "./components/Profile/EditProfile";
import Explore from "./components/Profile/Explore";
import Profile from "./components/Profile/Profile";




function App() {
  const [user, setUser] = useState({});
  const [ users, setUsers] = useState( [] )

  const updateUser = (user) => setUser(user);

useEffect(() => {
  fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);

useEffect(() => {
  fetch("/users")
    .then((r) => r.json())
    .then((usersData) => setUsers(usersData));
}, [user]);

 return (
  <Routes>
    <Route path="/" element={<Home  updateUser={updateUser} />}/>
    <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />}>
      <Route path="profile" element={<Profile />}/>
      <Route path="edit" element={<EditProfile setUsers={setUsers} users={users} user={user} setUser={setUser}/>}/>
      <Route path="explore" element={<Explore />}/>
    </Route>
  </Routes>
)

}

export default App;
