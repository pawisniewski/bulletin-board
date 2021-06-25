import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import randomID from '@pawel_wisniewski/id-generator';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux.js';
import { addPost } from '../../../redux/postsRedux.js';

import { NotFound } from '../NotFound/NotFound';
import { PostCreator } from '../../features/PostCreator/PostCreator';

// import styles from './PostAdd.module.scss';

const Component = ({ user, addPost } ) => { 
  const [newPost, setNewPost] = useState({
    title: '',
    text: '',
  });

  const changeHandler = event => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const history = useHistory();

  const submitForm = () => {
    addPost({
      ...newPost,
      id: randomID(10),
      email: user.email, 
    });
    setNewPost({
      title: '',
      text: '',
    });
    history.push('/');
  };
  
  if (!user) return <NotFound />;
  else {
    return (
      <PostCreator post={newPost} changeHandler={changeHandler} submitForm={submitForm} />
    );
  }
};

Component.propTypes = {
  user: PropTypes.object,
  addPost: PropTypes.func,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: newPost => dispatch(addPost(newPost)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
