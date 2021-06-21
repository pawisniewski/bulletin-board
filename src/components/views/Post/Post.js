import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getById } from '../../../redux/postsRedux.js';

import { Grid, Card, CardContent, Typography, Link } from '@material-ui/core';

import styles from './Post.module.scss';

const Component = ({ className, children, post }) => (
  
  <Grid container spacing={2} className={clsx(className, styles.root)}>
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
    </Grid>
  </Grid>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  post: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  post: getById(state, props.match.params.id),
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
