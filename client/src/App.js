import {useState,useEffect} from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Profile/Dashboard";
import EditProfile from "./components/Profile/EditProfile";
import Profile from "./components/Profile/Profile";
import NewBoard from "./components/Board/BoardContainer";
import PostContainer from "./components/Post/PostContainer";
import Explore from "./components/Post/Explore";
import Home from "./components/hero/Home";


function App() {
  const [user, setUser] = useState({});
  const [ users, setUsers] = useState( [] )
  const [boards, setBoards] = useState([])
  const [posts, setPosts] = useState([])

  const updateUser = (user) => setUser(user);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  
  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((postsData) => 
      setPosts(postsData)
      );
  }, []);

return (
  <Routes>
    <Route path="/" element={<Home  updateUser={updateUser} />}/>
    <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />}>
      <Route path="profile" element={<Profile user={user} boards={boards} setBoards={setBoards}/>}/>
      <Route path="edit" element={<EditProfile setUsers={setUsers} users={users} user={user} setUser={setUser}/>}/>
      <Route path="explore" element={<Explore user={user} posts={posts}/>}/>
      <Route path="new" element={<NewBoard user={user} setUsers={setUsers} users={users}/>}/>
      <Route path="board/:id" element={<PostContainer user={user} boards={boards} setPosts={setPosts}/>}/>
    </Route>
  </Routes>
)

}

export default App;
