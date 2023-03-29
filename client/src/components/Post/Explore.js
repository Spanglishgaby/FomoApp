import React from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import PostCard from './PostCard';

const { Search } = Input;

const suffix = (
  <AudioOutlined style={{fontSize: 16, color: '#1890ff'}}/>);

const Explore = ({posts, user, setPosts,setSearch}) => {

  const handleSearch=(e)=>{
    //console.log(e.target.value)
    setSearch(e.target.value)
   }
  let postArray = posts && posts.map((post) => (
    <PostCard
      key={post.id}
      post={post}
      user={user}
      setPosts={setPosts}
    />
  ));
  return (
    <>
    <Space direction="vertical">
    <Search placeholder="input search text" style={{ width: 200 }} icon={suffix} onChange={handleSearch}/>
    </Space>
    <div className='postContainer'>
    {postArray}
    </div>
    </>
  )
}

export default Explore




