import React, { useState } from 'react';
import { Button, Modal, Form, Input, Alert } from 'antd';
import { useHistory } from "react-router-dom";

const Signin = ({ updateUser }) => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })
    console.log(loginInfo)
    const history = useHistory();

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
                    history.push("/profile");
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
            <Button onClick={showModal}>Sign In</Button>
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
                        return (<Alert key={index} message={err} type="error" />)
                    })}
                    <p></p>
                </div>:null}
                <Form
                    name="login"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    autoComplete="off"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        ]}
                    >
                        <Input name="email" onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password name="password" onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                        offset: 10,
                        span: 16,
                        }}
                    >
                        <Button htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
    </>
  )
}

export default Signin