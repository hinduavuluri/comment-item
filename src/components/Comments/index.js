import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

const newArray = []
class Comments extends Component {
  state = {commentsList: newArray, name: '', comment: '', index: 0}

  likedTheComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavourite: !eachContact.isFavourite}
        }
        return eachContact
      }),
    }))
  }

  deleteTheComment = id => {
    const {commentsList} = this.state
    const result = commentsList.filter(eachComment => eachComment.id !== id)
    this.setState({commentsList: result})
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newContact = {id: uuidv4(), name, comment, isFavourite: false}
    this.seState(prevState => ({
      commentsList: [...prevState.commentsList, newContact],
      name: '',
      comment: '',
    }))
  }

  addContact = event => {
    this.setState({name: event.target.value})
  }

  addNo = event => {
    this.setState(prevState => ({index: prevState.index + 1}))
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment, index} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="body">
          <div className="input-container">
            <p className="text">Say somethimg about 4.0 Technologies</p>
            <form onSubmit={this.onAddContact}>
              <input
                placeholder="Your Name"
                className="form-control input-text"
                type="text"
                onChange={this.addName}
                value={name}
              />
              <textarea
                rows="10"
                cols="50"
                placeholder="Your Comment"
                className="input-text"
                onChange={this.addNo}
                value={comment}
              />
              <button type="submit"> Add Comment</button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <hr className="hr-line" />
        <div>
          <div className="no-container">
            <p>{commentsList.length}</p>
          </div>
          <p className="text">Comments</p>
        </div>

        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              deleteTheComment={this.deleteTheComment}
              likedTheComment={this.likedTheComment}
              key={eachComment.id}
              bgColor={initialContainerBackgroundClassNames[index]}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
