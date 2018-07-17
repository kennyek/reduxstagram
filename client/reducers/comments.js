import { ADD_COMMENT, REMOVE_COMMENT } from '../constants'

const postComments = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          text: action.payload.comment,
          user: action.payload.author
        }
      ];
    case REMOVE_COMMENT:
      return [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1)
      ];
    default:
      return state;
  }
}

const comments = (state = {}, action) => {
  const postId = action.payload && action.payload.postId;

  if (postId) {
    return {
      ...state,
      [postId]: postComments(state[postId], action)
    };
  }
  return state;
}

export default comments;
