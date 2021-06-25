import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getById } from '../../../redux/postsRedux.js';
import { getUser } from '../../../redux/userRedux.js';

import { Link as RouterLink } from 'react-router-dom';

import { Grid, Card, CardContent, Typography, Link, Button } from '@material-ui/core';

import styles from './Post.module.scss';

const Component = ({ className, children, post, user }) => {
  const editAbility = user ? user.type === 'admin' || user.email === post.email : false;
  
  return (
    <Grid container spacing={2} justify="center" className={clsx(className, styles.root)}>
      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Card>
          <CardContent>
            <Typography variant="h6" align="center">
              {post.title}
            </Typography>
            <Typography variant="body1">
              {post.text}
            </Typography>
            <Typography variant="body2" align="right">
              <Link href={`mailto:${post.email}`}>{post.email}</Link>
            </Typography>
          </CardContent>
        </Card>
        <div className={styles.button}>
          {editAbility && <Button component={RouterLink} to={`/post/${post.id}/edit`} variant="contained" color="primary">Edit post</Button> } 
        </div>
      </Grid>
      {children}
    </Grid>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  post: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  post: getById(state, props.match.params.id),
  user: getUser(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};
