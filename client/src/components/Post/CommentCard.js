import {useState} from 'react'
import { Comment } from 'semantic-ui-react'

const CommentCard = ({comment,currentuser, setAllComments}) => {


    // delete a comment if the comment id matches
    const deleteComment = id => {
        setAllComments(current => current.filter( comment => comment.id !== id ))
    }

    const handleDelete = () => {
        fetch(`/comments/${comment.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then( () => { deleteComment(comment.id)} )
    }
    
    return (
    <div>
        <Comment>
        <Comment.Avatar src={comment.user.profile_photo} />
        <Comment.Content>
            <Comment.Author as='a'>{comment.user.name}</Comment.Author>
            <Comment.Text>
            {comment.description}
            </Comment.Text>
            {comment.user.id === currentuser.id? (
                <Comment.Actions>
                    <Comment.Action onClick= {handleDelete}>Delete</Comment.Action>
                </Comment.Actions>
                ) : <></>}
            
        </Comment.Content>
    </Comment>
    
    </div>
  )
}

export default CommentCard