import {useState} from 'react';
import { Link  } from 'react-router-dom';
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { Card, Col, Row, Modal, Alert} from 'antd';
import { Button, Form } from 'semantic-ui-react'
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
function handleSubmit(e) {
    e.preventDefault();
    fetch(`/boards/${board.id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(updateBoard),
    })
    .then((r) => r.json())
    .then((data) => {
        handleUpdate(data);
    });
}

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
        <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>Title</label>
            <input value={updateBoard.title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Field>
        <Button type='submit'>Update</Button>
        </Form>
    </Modal>
    </div>
    
  )
}

export default BoardCard