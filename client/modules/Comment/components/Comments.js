import React from 'react';
import { Comment } from './Comment';
import PropTypes from 'prop-types';

export const Comments = ({ comments }) => {
  if (!comments.length) {
    return <button>Загрузить комментарии</button>;
  }
  return (
    comments.map(comment => <Comment comment={comment} key={comment} />)
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
