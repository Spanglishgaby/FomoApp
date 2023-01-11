import { Button, Modal, Form, Input, Alert } from 'antd';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function Signup({ updateUser }) {
    const [openSignup, setOpenSignup] = useState(false)
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        age:""
    })
    const history = useHistory();

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    function handleOpen({updateUser}) {
        setOpenSignup(true)
    }
    function handleClose() {
        setOpenSignup(false)
    }
    function handleSubmit() {
        // e.preventDefault()
        console.log("RegisterOK")
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => {
                    updateUser(user);
                    history.push("/");
                });
            } else {
                r.json().then((json) => setErrors(json.errors));
            }
        });
    }
        function handleInputChange(e) {
            setNewUser({
                ...newUser, [e.target.name]:e.target.value
            })
        }
    return (
        <>
            <Button onClick={handleOpen}>Create New Account</Button>
            <Modal 
                title="User Registration" 
                open={openSignup}
                onCancel={handleClose}
                onOk={handleClose}
                footer={null}
            >
                {errors?
                <div>
                    <Alert message={
                        errors.map((err)=>{
                            return(
                                <li>{err}</li>
                            )
                        })
                    } type="error" />
                    <p></p>
                </div>:null}
                <Form
                    name="registration"
                    labelCol={{
                        span: 9,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    autoComplete="off"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your full name!',
                        },
                        ]}
                    >
                        <Input name="name" onChange={handleInputChange} />
                    </Form.Item>
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
                        label="Age"
                        name="age"
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your age!',
                        },
                        ]}
                    >
                        <Input name="age" onChange={handleInputChange}  />
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

export default Signup