import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => {
  return (
    <div>
      <h1>title {comment}</h1>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    postId: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
