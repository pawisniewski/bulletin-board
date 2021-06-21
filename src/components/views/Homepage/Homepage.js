import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux.js';
import { getAll } from '../../../redux/postsRedux.js';

import Button from '@material-ui/core/button';

import { PostList } from '../../features/PostList/PostList';

import { Link as RouterLink } from 'react-router-dom';

import styles from './Homepage.module.scss';

const Component = ({ className, children, user, posts }) => {
  const addNew = user ? (
    <Button component={RouterLink} to="/post/add" variant="contained" color="primary">Add new post</Button>  
  ) : null;
  
  return (
    <div className={clsx(className, styles.root)}>
      <PostList posts={posts} />
      <div className={styles.button}>
        {addNew}
      </div>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  user: PropTypes.object,
  posts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  user: getUser(state),
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
