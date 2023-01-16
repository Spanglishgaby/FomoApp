import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Form, Input, Alert } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';


const Signin = ({ updateUser }) => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    function handleSubmit() {
    //console.log("submit")
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(loginInfo),
            }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => {
                    updateUser(user)
                    navigate('/dashboard/profile');
                });
            } else {
                r.json().then((json) => setErrors(json.errors));
            }
        });
    }
    function handleInputChange(e) {
        setLoginInfo({...loginInfo, [e.target.name]:e.target.value
        })
    }
return (
    <>
    <Button shape='round' className="BtnSignIn" onClick={showModal}>Sign In</Button>
    <Modal 
        title="User Login" 
        open={open}
        onCancel={handleCancel}
        onOk={handleCancel}
        footer={null}
    >
        {errors?
        <div>
            {errors.map((err,index)=>{
                return (<Alert key={index} message={err} type="error" />)})}
            <p></p>
        </div>:null}
        <Form
            name="login"
            className="login-form"
            // autoComplete="off"
            // initialValues={{ remember: true }} checkbox remember me
            onFinish={handleSubmit}
            wrapperCol={{offset: 5}}
        >
            <Form.Item
                // label="Email"
                name="email"
                rules={[{required: true, message: 'Please input your email!'}]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" name="email" onChange={handleInputChange} />
            </Form.Item>
            <Form.Item
                // label="Password"
                name="password"
                rules={[{required: true,message: 'Please input your password!'}]}
            >
                <Input.Password  prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" name="password" onChange={handleInputChange} />
            </Form.Item>
            <Form.Item
                wrapperCol={{offset: 5}}
            >
                <Button type="primary" htmlType="submit" className="login-form-button">
                Submit
                </Button>
                
            </Form.Item>
        </Form>
    </Modal>
    </>
)
}

export default Signin