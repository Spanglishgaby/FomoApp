import React from 'react'
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import UploadPhoto from './UploadPhoto';
// import { useHistory } from "react-router-dom";

const EditProfile = () => {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        age:""
    })
    function handleInputChange(e) {
        setNewUser({
            ...newUser, [e.target.name]:e.target.value
        })
    }
  return (
    <div classname=""> 
    <UploadPhoto/>
    <Form
        name="UpdateProfile"
        labelCol={{
            span: 5,
        }}
        // wrapperCol={{offset: 5}}
        autoComplete="off"
        // onFinish={handleSubmit}
    >
        
        <Form.Item
            label="Name"
            name="name"
        >
            <Input name="name" onChange={handleInputChange} />
        </Form.Item>
        <Form.Item
            label="Email"
            name="email"
        >
            <Input name="email" onChange={handleInputChange} />
        </Form.Item>
        <Form.Item
            label="Age"
            name="age"
        >
            <Input name="age" onChange={handleInputChange}  />
        </Form.Item>
        <Form.Item
            label="Password"
            name="password"
        >
            <Input.Password name="password" onChange={handleInputChange} />
        </Form.Item>
        <Form.Item
            wrapperCol={{offset: 5}}
        >
            <Button type="primary" htmlType="submit" className="login-form-button">
            Save
            </Button>
        </Form.Item>
    </Form>
</div>
  )
}

export default EditProfile