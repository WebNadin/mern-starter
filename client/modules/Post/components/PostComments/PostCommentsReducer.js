import { FETCH_COMMENTS, CREATE_COMMENT } from './types';

const initialState = {
  comments: [],
  fetchedComments: [],
};

// Pure Functions
const PostCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return { ...state, comments: state.comments.concat([action.payload]) };
    case FETCH_COMMENTS:
      return { ...state, fetchedComments: action.payload };
    default: return state;
  }
};

export default PostCommentsReducer;
