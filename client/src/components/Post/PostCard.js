import React from 'react'
import {Card} from 'antd';

const { Meta } = Card;


const PostCard = ({post}) => {
  
  return (
    <div className='postCardEx'>
    <Card style={{ width: 300 }}
        cover={<img src={post.url} />}
      
    >
    <Meta
      description={post.content}
    />
  </Card>
  <br></br>
  </div>
  )
}

export default PostCard 