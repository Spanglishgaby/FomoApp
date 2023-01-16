import {useEffect,useState} from 'react'

import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import PostCard from './PostCard';

const { Search } = Input;

const suffix = (
  <AudioOutlined style={{fontSize: 16, color: '#1890ff'}}/>);

const Explore = (user) => {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((postsData) => 
      setPosts(postsData)
      );
  }, []);

  let postArray = posts && posts.map((post) => (
    <PostCard
      key={post.id}
      post={post}
    />
  ));
  return (
    <>
    <Space direction="vertical">
    <Search placeholder="input search text" style={{ width: 200 }} icon={suffix}/>
    </Space>
    <div className='postContainer'>
    {postArray}
    </div>
    </>
  )
}

export default Explore




