import { Button, Modal, Form, Input, Alert } from 'antd';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

function Signup({ updateUser }) {
    const [openSignup, setOpenSignup] = useState(false)
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        age:"",
        pass_confirmation:""
    })
    //const navigate = useNavigate();

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    function handleOpen() {
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
                    setOpenSignup(false);
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
        <Button shape='round' className="BtnSignUp" onClick={handleOpen}>Register</Button>
        <Modal 
            title="User Registration" 
            open={openSignup}
            onCancel={handleClose}
            onOk={handleClose}
            footer={null}
        >
            {errors?
            <div>
                {errors.map((err,index)=>{return (<Alert key={index} message={err} type="error" />)
                })}
                <p></p>
            </div>:null}
            <Form
                name="registration"
                labelCol={{
                    span: 10,
                }}
                // wrapperCol={{offset: 5}}
                autoComplete="off"
                onFinish={handleSubmit}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{required: true, message: 'Please input your full name!'}]}
                >
                    <Input name="name" onChange={handleInputChange} />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!'}]}
                >
                    <Input name="email" onChange={handleInputChange} />
                </Form.Item>
                <Form.Item
                    label="Age"
                    name="age"
                    rules={[{ required: true,message: 'Please confirm your age!'}]}
                >
                    <Input name="age" onChange={handleInputChange}  />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true,message: 'Please input your password!'}]}
                >
                    <Input.Password name="password" onChange={handleInputChange} />
                </Form.Item>
                <Form.Item
                    label="Password Confirmation"
                    name="pass_confirmation"
                    rules={[{required: true,message: 'Please confirm your password!'}]}
                >
                    <Input.Password name="pass_confirmation" onChange={handleInputChange} />
                </Form.Item>
                <Form.Item
                    wrapperCol={{offset: 5}}
                >
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Register
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    </>
    )
}

export default Signup