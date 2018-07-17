import { ADD_COMMENT, INCREMENT_LIKES, REMOVE_COMMENT } from '../constants';

export const incrementLikes = (index) => {
  return {
    type: INCREMENT_LIKES,
    payload: {
      index
    }
  }
}

export const addComment = (postId, author, comment) => {
  return {
    type: ADD_COMMENT,
    payload: {
      author,
      comment,
      postId
    }
  }
}

export const removeComment = (postId, index) => {
  return {
    type: REMOVE_COMMENT,
    payload: {
      index,
      postId
    }
  }
}
