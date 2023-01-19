import {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import CreatePost from "./CreatePost";

import PostCardBoard from "./PostCardBoard";
const PostContainer = ({user,setPosts}) => {
  const [ postsUser, setPostUser ] = useState ( [] )
  const { id } = useParams();

  useEffect( () =>{
    fetch (`/boardposts/${id}`)
    .then ( r => r.json() )
    .then ((data) =>  
    setPostUser (data)
    )
    },[id])

    let postArray = postsUser && postsUser.map((post) => (
      <PostCardBoard
        key={post.id}
        post={post}
        setPosts={setPosts}
      />
    ));
  return (
    <>
    <CreatePost setPosts={setPosts} user={user} board_id={id}/>  
    <div className= "postContainer">
      {postArray}
    </div>
    </>
  )
}

export default PostContainer