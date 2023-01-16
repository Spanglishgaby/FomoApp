import {useState,useEffect} from "react";
import Home from "./components/hero/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Profile/Dashboard";
import EditProfile from "./components/Profile/EditProfile";
import Explore from "./components/Profile/Explore";
import Profile from "./components/Profile/Profile";
import NewBoard from "./components/Board/BoardContainer";
import PostContainer from "./Post/PostContainer";




function App() {
  const [user, setUser] = useState({});
  const [ users, setUsers] = useState( [] )
  const [boards, setBoards] = useState([])

  const updateUser = (user) => setUser(user);

useEffect(() => {
  fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);

// useEffect(() => {
//   fetch("/users")
//     .then((r) => r.json())
//     .then((usersData) => setUsers(usersData));
// }, [user]);
console.log(user)
 return (
  <Routes>
    <Route path="/" element={<Home  updateUser={updateUser} />}/>
    <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />}>
      <Route path="profile" element={<Profile user={user} setUser={setUser} boards={boards} setBoards={setBoards}/>}/>
      <Route path="edit" element={<EditProfile setUsers={setUsers} users={users} user={user} setUser={setUser}/>}/>
      <Route path="explore" element={<Explore />}/>
      <Route path="new" element={<NewBoard user={user} setUsers={setUsers} users={users}/>}/>
      <Route path="board/:id" element={<PostContainer/>}/>
    </Route>
  </Routes>
)

}

export default App;
