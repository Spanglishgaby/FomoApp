import {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
//import CreatePost from "./CreatePost";
import { Button, Form} from 'semantic-ui-react'
import { Modal,message} from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons';
import PostCardBoard from "./PostCardBoard";


const PostContainer = ({user,posts,setPosts}) => {
  const [ postsUser, setPostUser ] = useState ( [] )
  const [openCreate, setOpenCreate] = useState(false)
  const [url, setUrl] = useState("")
  const [post_content, setContent] = useState("")
  const [post_tag, setTag] = useState("")
  const { id } = useParams();
  let boardID = parseInt(id)

  useEffect( () =>{
    fetch (`/boardposts/${id}`)
    .then ( r => r.json() )
    .then ((data) =>  
    setPostUser(data)
    )
    },[posts])
//////
  function handleOpen() {
    setOpenCreate(true)
  }
  function handleClose() {
    setOpenCreate(false)
  }

  const newPost = {
    url: url,
    post_content: post_content,
    post_tag:post_tag,
    user_id:user.id,
    board_id:boardID,
}
console.log(newPost)
  function handleSubmit() {
    fetch("/posts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newPost),
    })
    .then(r => r.json())
    .then(newPost=>{
                setPosts([...posts, newPost]);
                success()
                setOpenCreate(false)
            })
            
    }
    

  const success = () => {
    message.success('New Post Created!');
  };

//////
    let postArray = postsUser&&postsUser.map((post) => {
      return <PostCardBoard key={post.id}  post={post} setPostUser={setPostUser}/>
    });
//////
  return (
    <>
    <div className="AddPost">
        <h3><PlusCircleOutlined onClick={handleOpen}/>Add a Post</h3>
        <Modal 
            title="Create a New Post" 
            open={openCreate}
            onCancel={handleClose}
            onOk={handleClose}
            footer={null}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Input placeholder='Please input the post URL'  onChange={(e) => setUrl(e.target.value)} />
            <Form.Input placeholder='Please input the post Description'  onChange={(e) => setContent(e.target.value)}  />
            <Form.Input placeholder='Please input a tag'  onChange={(e) => setTag(e.target.value)}  />
            <Button content='Submit' labelPosition='left' icon='edit' primary />
          </Form>
        </Modal>
    </div> 
    <div className= "postContainer">
      {postArray}
    </div>
    </>
  )
}

export default PostContainer