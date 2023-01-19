import {useState} from 'react'
import {Card, Modal} from 'antd';
import {CommentOutlined} from '@ant-design/icons';
import Comments from './Comments';
const { Meta } = Card;


const PostCard = ({post, user, setPosts}) => {
const [showComment, setShowComment] = useState(false)

function handleOpen() {
  setShowComment(true)
}
function handleClose() {
  setShowComment(false)
}
  return (
    <div className='postCardEx'>
      <Card style={{ width: 300 }}
          cover={<img src={post.url} />}
          actions={[
            <CommentOutlined  key="edit" onClick={handleOpen}/>,
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