import {combineReducers} from 'redux';
import PostsReducer from './posts/PostsReducer';

// let initialState = {
//   list : []
// }
// const PostsReducer = (state = initialState) => {
//   return state;
// }

const rootReducer = combineReducers({
  PostsReducer : PostsReducer
});

export default rootReducer;
