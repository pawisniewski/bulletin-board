import React, { useState } from 'react';
import PropTypes from 'prop-types';
import randomID from '@pawel_wisniewski/id-generator';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux.js';
import { addPost } from '../../../redux/postsRedux.js';

import { Grid, Card, CardContent, Button, TextField } from '@material-ui/core';

import styles from './PostAdd.module.scss';

const Component = ({ className, children, user, addPost } ) => { 
  const [newPost, setNewPost] = useState({
    title: '',
    text: '',
  });

  const changeHandler = event => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    addPost({
      ...newPost,
      id: randomID(10),
      email: user.email, 
    });
    setNewPost({
      title: '',
      text: '',
    });
  };
  
  return (
    <Grid container spacing={2} justify="center" className={clsx(className, styles.root)}>
      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Card>
          <CardContent align="center">
            <form noValidate autoComplete='off'>
              <TextField
                value={newPost.title}
                onChange={changeHandler}
                name='title'
                id="title"
                label="Title"
              />
              <TextField
                value={newPost.text}
                onChange={changeHandler}
                name='text'
                id="text"
                label="Text"
                variant="outlined"
                multiline
                rows={5}
                margin='normal'
              />
            </form>
          </CardContent>
        </Card>
        <div className={styles.button}>
          <Button onClick={submitForm} variant="contained" color="primary">Add post</Button>
        </div>
      </Grid>
      {children}
    </Grid>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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
