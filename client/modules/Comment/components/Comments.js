import React from 'react';
import { Comment } from './Comment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Comments = ({ syncComments }) => {
  if (!syncComments.length) {
    return <button>Загрузить комментарии</button>;
  }
  return (
    syncComments.map(comment => <Comment comment={comment} key={comment} />)
  );
};

Comments.propTypes = {
  syncComments: PropTypes.objectOf(PropTypes.shape({
    postId: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => {
  return {
    syncComments: state.comments,
  };
};

export default connect(mapStateToProps, null)(Comments);
