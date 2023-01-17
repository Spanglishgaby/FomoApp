import {useState} from 'react';
import { Link  } from 'react-router-dom';
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { Card, Col, Row, Modal, message, Radio, Button, Form,Input } from 'antd';
//import { Button, Form } from 'semantic-ui-react'
const { Meta } = Card;

const BoardCard = ({board,boards,setBoards}) => {
const [openCreate, setOpenCreate] = useState(false)
const [title, setTitle] = useState(board.title)
const [color, setColor] = useState(board.color)

function handleOpen() {
    setOpenCreate(true)
}
function handleClose() {
    setOpenCreate(false)
}

//Edit Profile
const updateBoard = {
    title: title || "",
    color: color || "",
}
 //console.log(updateBoard)

const handleUpdate = (updatedBoard) =>
    setBoards((current) => {
    return current.map((board) => {
        if (board.id === updatedBoard.id) {
            return updatedBoard;
        } else {
            return board;
        }
        });
    });
function handleSubmit() {
    //e.preventDefault();
    fetch(`/boards/${board.id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(updateBoard),
    })
    .then((r) => r.json())
    .then((data) => {
        handleUpdate(data);
        setOpenCreate(false)
        success()
    });
}
const success = () => {
    message.success('Board was updated!');
};
//Delete Profile
const handleDelete = (id) =>
    setBoards((current) => current.filter((p) => p.id !== id));

function handleSubmitDelete() {
    fetch(`boards/${board.id}`, {
    method: "DELETE"
    }).then(()=>{
    handleDelete(board.id)
    })
}
    return (
    <div className='cards'>
    <Row gutter={12}>
    <Col span={8}>
        <br></br>
        <Card className='card' style={{ width: 300 , backgroundColor:`${board.color}` }}
        actions={[
        <DeleteOutlined key="delete"  value={board.id} onClick={handleSubmitDelete}/>,
        <EditOutlined key="edit"  onClick={handleOpen}/>,
        ]}
        >
            <Link to={`/dashboard/board/${board.id}`} >
            <Meta
            title={board.title}
            />
            </Link>
        </Card>
    </Col>
    </Row>
    <Modal 
    title="Update the Board" 
    open={openCreate}
    onCancel={handleClose}
    onOk={handleClose}
    footer={null}
    >
        <Form
            layout="vertical"
            wrapperCol={{span: 13,}}
            onFinish={handleSubmit}
            >
                <Form.Item
                    label="Board Title"
                    rules={[{required: true, message: 'Please input the board title'}]}
                >
                    <Input type="text" defaultValue={board.title} onChange={(e) => setTitle(e.target.value)} />
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
                    Update
                </Button>
            </Form>
    </Modal>
    </div>
    
  )
}

export default BoardCard