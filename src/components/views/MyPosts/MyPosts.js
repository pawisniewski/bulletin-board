import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getByEmail } from '../../../redux/postsRedux.js';
import { getUser } from '../../../redux/userRedux.js';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Button } from '@material-ui/core';

import { PostList } from '../../features/PostList/PostList';
import { NotFound } from '../NotFound/NotFound';

import styles from './MyPosts.module.scss';

const Component = ({ className, children, posts, user }) => {
  const addNew = user ? (
    <Button component={RouterLink} to="/post/add" variant="contained" color="primary">Add new post</Button>  
  ) : null;
  
  if (!user) return <NotFound />;
  else {
    return (
      <Grid container spacing={2} className={clsx(className, styles.root)}>
        <Grid item sm={12}>
          <PostList posts={posts} />
          <div className={styles.button}>
            {addNew}
          </div>
        </Grid>
        {children}
      </Grid>
    );
  }
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: getByEmail(state),
  user: getUser(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as MyPosts,
  Container as MyPosts,
  Component as MyPostsComponent,
};