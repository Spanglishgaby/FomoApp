import React from 'react'

import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);



const Explore = () => {
  return (
    <Space direction="vertical">
    <Search placeholder="input search text" style={{ width: 200 }} icon={suffix}/>

  </Space>
  )
}

export default Explore




