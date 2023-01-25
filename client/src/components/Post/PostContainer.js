import {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
//import CreatePost from "./CreatePost";
import { Button, Form} from 'semantic-ui-react'
import { Modal,message} from 'antd'
import { PlusCircleOutlined  } from '@ant-design/icons';
import PostCardBoard from "./PostCardBoard";



const PostContainer = ({user,posts,setPosts}) => {
  const [ postsUser, setPostUser ] = useState ( [] )
  const [openCreate, setOpenCreate] = useState(false)
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
////////
const [formData, setFormData] = useState({
  url: '',
  post_content:'',
  post_tag: '',
  user_id:user.id,
  board_id:boardID,
  image: null
})
const handleInput = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

const handleFileChange = (event) => {
  // Check that the file is a PNG or JPG
  if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
    setFormData({
      ...formData,
      image: event.target.files[0]
  })
  } else {
      alert('Please select a PNG or JPG file');
  }
};


  function handleSubmit(e) {
    e.preventDefault()
    const entityData = new FormData()
    // Credit to Ignas Butautas for this handy loop
    for (const property in formData) {
        entityData.append(
          property, formData[property]
        )
    }

    fetch("/posts", {
        method: "POST",
        body:entityData,
      })
      .then(r => r.json())
      .then(newPost =>{
              setPosts([...posts, newPost])
              success()
              setOpenCreate(false)
          console.log(newPost)
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
            <br></br>
            <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg"  />
            <br></br>
            <br></br>
            {/* <Form.Input placeholder='Please input the post URL' name= "url" onChange={handleInput} /> */}
            <Form.Input placeholder='Please input the post Description' name= "post_content" onChange={handleInput}  />
            <Form.Input placeholder='Please input a tag' name= "post_tag" onChange={handleInput}  />
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