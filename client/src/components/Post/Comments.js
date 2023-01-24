import {useState, useEffect} from 'react'
import CommentCard from './CommentCard'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import data from "@emoji-mart/data"
import Picker from '@emoji-mart/react'

const Comments = ({post_id,user}) => {
    const [showPicker, setShowPicker] = useState(false);
    const [ allComments, setAllComments ] = useState ( [] )
    const [ description, setDescription ] = useState ( "" )

    const onEmojiClick = ( emojiObject) => {
      setDescription (prevInput => prevInput + emojiObject.native);
      setShowPicker(false);
    };

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
      <Form.Input placeholder='Insert a Comment' width={12} onChange={ e => setDescription(e.target.value)} />
      <img
          className="emoji-icon"
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker(val => !val)} />
        {showPicker &&<Picker data={data} onEmojiSelect={onEmojiClick}/>}
      <Button content='Submit' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>  
  </div>
  )
}

export default Comments