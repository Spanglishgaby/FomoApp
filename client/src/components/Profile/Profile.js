import React from 'react'
import { Image,Space,Card } from 'antd';
import AddBoard from '../Board/AddBoard';
import BoardContainer from '../Board/BoardContainer';

const Profile = ({user,boards,setBoards}) => {
  return (
  <div className='profile'>
    <Image
      className='profileName'
      width={200}
      height={280}
      src={user.profile_photo}
    />
    <Space className='profile' direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Card  style={{ width: 300, textAlign: 'center'} }>
        <h1 className='h4Profile'>{user.name}</h1>
        <h4 className='h4Profile'>📍{user.location}</h4>
        <h5 className='h4Profile'>📩{user.email}</h5>
        <p>{user.bio}</p>
      </Card>
    </Space>
    {/* Add New Board Modal */}
    <AddBoard user={user}  setBoards={setBoards}/>
     {/* Board Container - show all the user boards */}
    <div className='profileContainer'>
    <BoardContainer user={user} boards={boards} setBoards={setBoards}/>
    </div>
  </div>
  )
}

export default Profile