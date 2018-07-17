import React from 'react';

const Comment = (props) => {
  const { comment, index, params, removeComment } = props;

  return (
    <div className="comment">
      <p>
        <strong>{comment.user}</strong>
        {comment.text}
        <button
          className="remove-comment"
          onClick={removeComment.bind(null, params.postId, index)}>
          &times;
        </button>
      </p>
    </div>
  );
}

export default Comment;
