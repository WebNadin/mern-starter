import { CREATE_COMMENT, REQUEST_COMMENTS, SHOW_LOADER, HIDE_LOADER } from './types';

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
  return {
    type: REQUEST_COMMENTS,
  };
}
