import React from 'react';

// Import Components
import { PostCommentsList } from './PostCommentsList';
import PostAddCommentForm from './PostAddCommentForm';

function PostComments() {
  return (
    <div className="listView">
      <PostAddCommentForm />
      <PostCommentsList />
    </div>
  );
}

export default PostComments;
