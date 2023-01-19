import {useState, useEffect} from 'react'
import CommentCard from './CommentCard'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const Comments = ({post_id,user}) => {
    const [ allComments, setAllComments ] = useState ( [] )
    const [ description, setDescription ] = useState ( "" )
    // render comment based on the post user clicked on
    useEffect( () =>{
    fetch (`/postcomments/${post_id}`)
    .then ( r => r.json() )
    .then ( (data) =>
    //console.log ( data)
    setAllComments(data)
    )},[post_id])

 
    const handleSubmit = e => {
        e.preventDefault();
        const newComment = {
            description: description,
            user_id: user.id,
            post_id: post_id
        }
        console.log ( newComment)
        fetch('/comments',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( newComment )
        })
        .then(res => res.json())
        .then( newComment => setAllComments([...allComments, newComment]))

        setDescription("")
    }
    // render the comments related to the post from the database
    const arrayComments = allComments.map( comment => {
        return <CommentCard key = {comment.id} comment = {comment} setAllComments= {setAllComments} setDescription = {setDescription } currentuser={user}/>
    })


  return (
    <div>
    <Comment.Group>
    <Header as='h3' dividing>Comments</Header>
    {arrayComments}
    <Form onSubmit={handleSubmit}>
      <Form.Input placeholder='Insert a Comment'  onChange={ e => setDescription(e.target.value)} />
      <Button content='Submit' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>  
  </div>
  )
}

export default Comments