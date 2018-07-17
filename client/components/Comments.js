import React from 'react';
import Comment from './Comment';

class Comments extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map((comment, index) =>
          <Comment
            key={index}
            index={index}
            comment={comment}
            params={this.props.params}
            removeComment={this.props.removeComment}
          />)}
        <form
          className="comment-form"
          ref="commentForm"
          onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }
}

export default Comments;
