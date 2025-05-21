import React from "react";
import { formatDistanceToNow } from "date-fns";

const CommentItem = (props) => {
  const { onUpdateLike, onDelete, commentDetails } = props;
  const { name, id, isLiked, comment,date } = commentDetails;

  const handleLikeClick = () => {
    onUpdateLike(id);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const likeStyle = {
    color: isLiked ? "blue" : "gray",
    cursor: "pointer",
    marginRight: "15px",
  };

  const commentStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    width: "100%",
  };
   const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });

  return (
    <li style={commentStyle}>
      <p>
        <strong>{name}</strong> •{" "}
        <span style={{ color: "#777", fontSize: "12px" }}>{timeAgo}</span>
      </p>
      <p style={{ marginTop: "5px", marginBottom: "10px" }}>{comment}</p>
      <div>
        <span style={likeStyle} onClick={handleLikeClick}>
          {isLiked ? "❤️ Liked" : "🤍 Like"}
        </span>
        <button
          onClick={handleDeleteClick}
          style={{
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
            color: "red",
          }}
        >
          🗑 Delete
        </button>
      </div>
    </li>
  );
};

export default CommentItem;
