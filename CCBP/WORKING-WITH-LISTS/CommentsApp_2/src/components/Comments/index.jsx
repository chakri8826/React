const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];
const initialCommentsList = []; 
// Write your code here
import { Component } from "react";
import {v4 as uuidv4} from 'uuid';
import CommentItem from "../CommentItem";
import './index.css'
class Comments extends Component {
  state = {
    commentsList: initialCommentsList,
    name: "",
    comment: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

    // onUpdateFav = (id) => {
  //   this.setState((prevState) => ({
  //     contactsList: prevState.contactsList.map((contact) =>
  //       contact.id === id
  //         ? { ...contact, isFavorite: !contact.isFavorite }
  //         : contact
  //     ),
  //   }));
  // };

  onUpdateLike = (id) =>{
    const { commentsList } = this.state;
    this.setState((prevState) => ({
      commentsList: prevState.commentsList.map((each) =>{
        if(each.id === id) return  { ...each, isLiked: !each.isLiked } 
        return each
    }),
    }));
  } 

  onDelete = (id) => {
    const { commentsList } = this.state;
    const updatedList = commentsList.filter((each) => each.id !== id);
    this.setState((prevState) => ({
      commentsList: [...updatedList],
    }));
  };

  addComment = (e) => {
    e.preventDefault();
    const { name, comment } = this.state;
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date(),
    };
    this.setState((prevState) => ({
      commentsList: [...prevState.commentsList, newComment],
      name: "",
      comment: "",
    }));
  };

  render() {
    const { name, comment, commentsList } = this.state;

    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f2f2f2",
      fontFamily: "Arial",
    };

    const boxStyle = {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      width: "400px",
      textAlign: "center",
    };

    const inputStyle = {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
    };

    const buttonStyle = {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    };

    const commentListStyle = {
      marginTop: "20px",
      textAlign: "left",
    };

    return (
      <div style={containerStyle}>
        <div style={boxStyle}>
          <h2>Leave a Comment</h2>
          <form onSubmit={this.addComment}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={this.handleChange}
              style={inputStyle}
              value={name}
            />
            <textarea
              type="textarea"
              name="comment"
              placeholder="Your Comment"
              onChange={this.handleChange}
              style={inputStyle}
              value={comment}
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>

          <ul className="uling">
            {commentsList.map((each) => (
              <CommentItem
                key={each.id}
                onUpdateLike={this.onUpdateLike}
                onDelete={this.onDelete}
                commentDetails={each}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Comments;
