import { CREATE_COMMENT, SHOW_LOADER, HIDE_LOADER, FETCH_COMMENTS } from './types';

export function createComment(postId) {
  return {
    type: CREATE_COMMENT,
    payload: postId,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function fetchComments() {
  return async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const json = await response.json();
    setTimeout(() => {
      dispatch({ type: FETCH_COMMENTS, payload: json });
    }, 500);
  };
}
