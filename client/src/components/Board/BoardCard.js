import {useState} from 'react';
import { useNavigate,Link  } from 'react-router-dom';
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { Card, Col, Row, Modal, Alert} from 'antd';
import { Button, Form } from 'semantic-ui-react'
const { Meta } = Card;

const BoardCard = ({board,boards,setBoards}) => {
const [openCreate, setOpenCreate] = useState(false)
const [title, setTitle] = useState(board.title)
const [color, setColor] = useState(board.color)
const navigate = useNavigate();
//Edit Profile
const updateBoard = {
    title: title || "",
    color: color || "",
}
function handleSubmit(e) {
    e.preventDefault();
    fetch(`/boards/${board.id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(updateBoard),
    })
    .then((r) => r.json())
    .then((data) => {
        setBoards(data);
        navigate('/dashboard/profile')
        // console.log(data);
    });
    <Alert message="Your Profile was updated!" type="success" />;
}
    function handleOpen() {
        setOpenCreate(true)
    }
    function handleClose() {
        setOpenCreate(false)
    }
//Delete Profile
function handleDelete() {
    fetch(`boards/${board.id}`, {
    method: "DELETE"
    })
    .then(()=>{
    setBoards(null)

    })
}
    return (
    <div className='cards'>
    <Row gutter={12}>
    <Col span={8}>
        <br></br>
        <Card className='card' style={{ width: 300 , backgroundColor:`${board.color}` }}
        actions={[
        <DeleteOutlined key="delete" onClick={handleDelete}/>,
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