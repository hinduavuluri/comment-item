// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, likedTheComment, deleteTheComment} = props
  const {name, comment, isFavourite, id} = commentDetails
  const date = formatDistanceToNow(new Date())
  const isLike = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isLiked = isFavourite ? 'blue' : 'normal'
  const onLikeComment = () => {
    likedTheComment(id)
  }
  const onDeleteComment = () => {
    deleteTheComment(id)
  }
  return (
    <li>
      <div className="bg-container">
        <div className="start-container">
          <div className="letter-container">
            <p>{name.charAt(0)}</p>
          </div>
          <button type="button" onClick={onLikeComment}>
            <img src={isLike} alt="like" className="like-icon" />
          </button>
        </div>
        <div className="middle-container">
          <p className="name">{name}</p>
          <p className="content">{comment}</p>

          <p className={`'like' ${isLiked}`}>Like</p>
        </div>
        <div className="time">
          <p className="date">{date}</p>
        </div>
        <button
          className="delete-icon"
          onClick={onDeleteComment}
          type="button"
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
