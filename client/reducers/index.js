import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import comments from './comments';
import posts from './posts';

const rootReducer = combineReducers({
  comments, posts, routing: routerReducer
});

const something = (state, action) => {
  switch (action.type) {
    case value:

      break;

    default:
      break;
  }
  return state;
}

export default rootReducer;
