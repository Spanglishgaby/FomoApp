import React from 'react'
import { Layout, Menu} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Switch, Route, Link ,useHistory } from "react-router-dom";
import Explore from './Explore';
import Profile from './Profile';
import NewPost from './NewPost';
import logo from "./logo.png"
const { Header, Content, Sider } = Layout;
const Dashboard = ({ setUser, user }) => {
  const history = useHistory();

  const handleLogOut = () => {
    fetch(`/logout`, {method: "DELETE"}).then((res) => {
      if (res.ok) {
        setUser(null);
        history.push("/");         //redirect user to home
      }
    });
  };
  //console.log('user')
  return (
    <Layout className="box">
    <Header className="header" >
      <img className="logo2" src={logo} alt="Logo" />
    </Header> 
    <Layout>
        <Sider width={300} id="sidebar">
            <Menu mode="inline">
                <Menu.Item key={0} disabled icon={<SmileOutlined />}>Hello, {user.name}</Menu.Item>
                <Menu.Item key={1} icon={<SmileOutlined />}>
                    <Link to="/profile">
                      Profile
                    </Link>
                </Menu.Item>
                <Menu.Item key={2} icon={<SmileOutlined />}>
                    <Link to="/new">
                        Edit Profile
                    </Link>
                </Menu.Item>
                <Menu.Item key={3} icon={<SmileOutlined />}>
                    <Link to="/explore">
                        Explore
                    </Link>
                </Menu.Item>
                <Menu.Item key={4} icon={<SmileOutlined />}onClick={handleLogOut}>Logout</Menu.Item>
            </Menu>
        </Sider>
    <Layout>
        <Content id='content'>
            <Switch>
                <Route path="/profile" element={<Profile  />}></Route>
                <Route path="/new" element={<NewPost  />}></Route>
                <Route path="/explore" element={<Explore  />}></Route>
            </Switch>
        </Content>
    </Layout>
    </Layout>
</Layout>
  )
}

export default Dashboard