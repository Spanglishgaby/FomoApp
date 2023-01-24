import {useState} from 'react'
import {Card, Modal} from 'antd';
import {CommentOutlined,HeartOutlined,HeartTwoTone  } from '@ant-design/icons';
import Comments from './Comments';
const { Meta } = Card;


const PostCard = ({post, user, setPosts}) => {
const [showComment, setShowComment] = useState(false)
const [addLike, setAddLike] = useState (false) // to track like button
const [count, setCount] = useState(post.post_like)

function handleOpen() {
  setShowComment(true)
}
function handleClose() {
  setShowComment(false)
}
const handleLikes = () =>{
  fetch(`/posts/${post.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        post_like: addLike ? --post.post_like : ++post.post_like
        })
  })
  .then(res => res.json())
  .then(newCount => {
      setCount(newCount.post_like)
  })
    console.log(count)
    setAddLike(!addLike)
}
  return (
    <div className='postCardEx'>
      <Card title={post.user.name} style={{ width: 300  }}
          cover={<img src={post.url} style={{  height: 400 }}/>}
          actions={[
            <CommentOutlined  key="edit" onClick={handleOpen}/>,
            <div  onClick = {handleLikes} >
              <p className="like">{post.post_like}</p>
              {addLike ?
                <HeartTwoTone  />:
                <HeartOutlined />
              }
                
            </div>
            
            ]}
      >
      <Meta description={post.post_content}/>
      
      </Card>
      <Modal 
    // title="Comments" 
    open={showComment}
    onCancel={handleClose}
    onOk={handleClose}
    footer={null}
    >
      <Comments post_id={post.id} user={user}/>
    </Modal>
  <br></br>
  </div>
  )
}

export default PostCard 