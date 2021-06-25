import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux.js';
import { getById } from '../../../redux/postsRedux.js';
import { updatePost } from '../../../redux/postsRedux.js';

import { NotFound } from '../NotFound/NotFound';
import { PostCreator } from '../../features/PostCreator/PostCreator';

// import styles from './PostEdit.module.scss';

const Component = ({ user, post, updatePost }) => {
  const [editedPost, setEditedPost] = useState({
    title: post ? post.title: '',
    text: post ? post.text : '',
  });

  const changeHandler = event => {
    setEditedPost({ ...editedPost, [event.target.name]: event.target.value });
  };

  const history = useHistory();

  const submitForm = () => {
    updatePost({
      ...editedPost,
      id: post.id,
      email: post.email, 
    });
    setEditedPost({
      title: '',
      text: '',
    });
    history.push('/');
  };
  
  const canEdit = user ? user.type === 'admin' || user.email === post.email : false;
  if (!post || !canEdit) return <NotFound />;
  else {
    return (
      <PostCreator post={editedPost} changeHandler={changeHandler} submitForm={submitForm} />
    );
  }
};

Component.propTypes = {
  user: PropTypes.object,
  post: PropTypes.object,
  updatePost: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  user: getUser(state),
  post: getById(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  updatePost: editedPost => dispatch(updatePost(editedPost)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
