import {useState} from "react";
import { Button, Modal, Form, Input,message} from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const CreatePost = ({setPosts,board_id,user}) => {
    const [openCreate, setOpenCreate] = useState(false)
    const [errors, setErrors] = useState([]);
    const [url, setUrl] = useState("")
    const [post_content, setContent] = useState("")
    const [post_tag, setTag] = useState("")
    const [form] = Form.useForm();
    let boardID = parseInt(board_id)
    const newPost = {
        url: url,
        post_content: post_content,
        post_tag:post_tag,
        user_id:user.id,
        board_id:boardID,
    }

    function handleOpen() {
        setOpenCreate(true)
    }
    function handleClose() {
        setOpenCreate(false)
    }
    
    function handleSubmit() {
        fetch("/posts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost),
        }).then((r)=>{
            if (r.ok) {
                r.json().then(newPost=>{
                    setPosts((currentPost) => [...currentPost, newPost]);
                    success()
                    setOpenCreate(false)
                })
            } else{
                r.json().then((json)=>setErrors([...errors, json.errors]))
            }
        })
        form.resetFields()
    }
    const success = () => {
        message.success('New Post Created!');
    };
  return (
    <div className="AddPost">
        <h3><PlusCircleOutlined onClick={handleOpen}/>Add a Post</h3>
        <Modal 
            title="Create a New Post" 
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
                    label="Post URL"
                    rules={[{required: true, message: 'Please input the post URL'}]}
                >
                    <Input onChange={(e) => setUrl(e.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Post Description"
                    rules={[{required: true, message: 'Please input the post Description'}]}
                >
                    <Input onChange={(e) => setContent(e.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Tag"
                    rules={[{required: true, message: 'Please input a tag'}]}
                >
                    <Input onChange={(e) => setTag(e.target.value)} />
                </Form.Item>
                
                <Button htmlType="submit" size="large">
                    Create
                </Button>
            </Form>
        </Modal>
    </div>
  )
}

export default CreatePost