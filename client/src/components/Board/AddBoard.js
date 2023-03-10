//import {useState,useEffect} from "react";
import {useState} from "react";
import { Button, Modal, Form, Input,message,Radio } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import DebounceSelect from "./DebounceSelect";


const AddBoard = ({user,setBoards}) => {
    const [openCreate, setOpenCreate] = useState(false)
    const [errors, setErrors] = useState([]);
    const [value, setValue] = useState([]);
    const [title, setTitle] = useState("")
    const [color, setColor] = useState("")
    const [form] = Form.useForm();
    
   // Open and Close Modal
    function handleOpen() {
        setOpenCreate(true)
    }
    function handleClose() {
        setOpenCreate(false)
    }

    const newBoard = {
        title: title,
        color: color,
    }
//Get users to show as options in Select 
    async function fetchUserList() {
        return fetch("/users")
            .then(r=>r.json())
            .then((data)=>
                data.map((user)=>({
                    label: `${user.id} ${user.name}`,
                    value: user.email
                }))
            )
    }
    function handleSubmit() {
        fetch("/boards", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newBoard),
        }).then((r)=>{
            if (r.ok) {
                r.json().then(newboard=>{
                    setBoards((currentboard) => [...currentboard, newboard]);
                    handleSubmit2(newboard.id)
                    success()
                    setOpenCreate(false)
                })
            } else{
                r.json().then((json)=>setErrors([...errors, json.errors]))
            }
        })
        
    }
    const success = () => {
        message.success('New Board Created!');
    };

    function handleSubmit2(board_id) {
        
        const users = value.map(v=>{return(v.label.split(' ')[0])})
        if (users.indexOf(user.id.toString())===-1) {
            users.push(user.id.toString())
        }
        users.map((user)=>{
            fetch("/userboards", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    user_id: parseInt(user), 
                    board_id: board_id
                }),
            }).then((r)=>{
                if (r.ok) {
                    r.json().then((data=>{console.log(data)}))
                } else{
                    r.json().then((json)=>setErrors([...errors, json.errors]))
                }
            })
        })
        form.resetFields()
    }

    return (
    <div className="AddBoard">
        <h3><PlusCircleOutlined onClick={handleOpen}/>Add a Board</h3>
        <Modal 
            title="Create a new Board" 
            open={openCreate}
            onCancel={handleClose}
            onOk={handleClose}
            footer={null}
        >
            <Form
            form={form}
            layout="vertical"
            wrapperCol={{span: 13,}}
            onFinish={handleSubmit}
            >
                <Form.Item
                    label="Board Title"
                    rules={[{required: true, message: 'Please input the board title'}]}
                >
                    <Input onChange={(e) => setTitle(e.target.value)} />
                </Form.Item>
                <Form.Item
                    label="collaborators"
                    name="collaborators"
                    rules={[
                    {
                        required: true,
                        message: 'Please select board collaborators!',
                    },
                    ]}
                >
                    <DebounceSelect
                        mode="multiple"
                        value={value}
                        placeholder="Select users"
                        fetchOptions={fetchUserList}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Form.Item>
                <Form.Item label="Board Color">
                    <Radio.Group
                        onChange={(e) => setColor(e.target.value)}
                        style={{ marginTop: 10 }}
                    >
                        <Radio value="#F8EDE3" style={{ backgroundColor:'#F8EDE3', padding:10 }}></Radio>
                        <Radio value="#F5F5DC" style={{ backgroundColor:'#F5F5DC', padding:10 }}></Radio>
                        <Radio value="#CEEDC7" style={{ backgroundColor:'#CEEDC7', padding:10 }}></Radio>
                        <Radio value="#FEFCF3" style={{ backgroundColor:'#FEFCF3', padding:10 }}></Radio>
                        <Radio value="#FFE3E1" style={{ backgroundColor:'#FFE3E1', padding:10 }}></Radio>
                    </Radio.Group>
                </Form.Item>
                <Button htmlType="submit" size="large">
                    Create
                </Button>
            </Form>
        </Modal>
    </div>
    )
}

export default AddBoard