import { bindActionCreators } from 'redux';
import {types} from '../../actions/types';

let initialState = {
  list : []
}

const PostsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_POSTS : {
      return {
        ...state
      }
    }
  }
  return state;
}

export default PostsReducer;