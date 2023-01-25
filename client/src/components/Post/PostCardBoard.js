
import {useState} from 'react';
import {Card, Modal, message, Button, Form,Input } from 'antd';
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons';

const { Meta } = Card;

const PostCardPost = ({post, setPostUser}) => {
  const [openCreate, setOpenCreate] = useState(false)
  const [url, setUrl] = useState(post.url)
  const [post_content, setContent] = useState(post.post_content)
  const [post_tag, setTag] = useState(post.post_tag)

  function handleOpen() {
    setOpenCreate(true)
  }
  function handleClose() {
    setOpenCreate(false)
  }
  //Edit Profile
  const updatePost = {
    url: url || "",
    post_content: post_content|| "",
    post_tag:post_tag || "",
}

//console.log(updatePost)

const handleUpdate = (updatedPost) =>
setPostUser((current) => {
  return current.map((post) => {
      if (post.id === updatedPost.id) {
          return updatedPost;
      } else {
          return post;
      }
      });
  });
function handleSubmit() {
  //e.preventDefault();
  fetch(`/posts/${post.id}`, {
  method: "PATCH",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(updatePost),
  })
  .then((r) => r.json())
  .then((data) => {
      handleUpdate(data);
      setOpenCreate(false)
      success()
  });
}
const success = () => {
  message.success('Post was updated!');
};
//Delete Profile
const handleDelete = (id) =>
setPostUser((current) => current.filter((post) => post.id !== id));

function handleSubmitDelete() {
  fetch(`/posts/${post.id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
})
.then( () => { handleDelete(post.id)} )
}
  return (
  <div className='postCardEx'>
    <Card title={post.user.name} style={{ width: 300 }}
        cover={ <img alt="example" src={post.image_url ? post.image_url : post.url} style={{  height: 400 }}/>}
        actions={[
          <DeleteOutlined key="delete"  value={post.id} onClick={handleSubmitDelete}/>,
          <EditOutlined key="edit"  onClick={handleOpen}/>,
          ]}
    >
      
      <Meta description={post.post_content}/>
    </Card>
  <br></br>
  <Modal 
    title="Update the Post" 
    open={openCreate}
    onCancel={handleClose}
    onOk={handleClose}
    footer={null}
    >
        <Form
            layout="vertical"
            wrapperCol={{span: 26,}}
            onFinish={handleSubmit}
            >
                {/* <Form.Item label="Post Title">
                    <Input type="text" defaultValue={post.url} onChange={(e) => setUrl(e.target.value)} />
                </Form.Item> */}
                <Form.Item label="Post Description">
                    <Input type="text" defaultValue={post.post_content} onChange={(e) => setContent(e.target.value)} />
                </Form.Item>
                <Form.Item label="Tag">
                    <Input type="text" defaultValue={post.post_tag} onChange={(e) => setTag(e.target.value)} />
                </Form.Item>
                <Button htmlType="submit" size="large">
                    Update
                </Button>
            </Form>
    </Modal>
  </div>
  )
}

export default PostCardPost