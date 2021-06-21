import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { Grid, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

import {Link as RouterLink} from 'react-router-dom';

import styles from './PostList.module.scss';

const Component = ({ className, children, posts }) => (
  
  <Grid container spacing={2} className={clsx(className, styles.root)}>
    {posts.map(({ id, title }) => (
      <Grid item key={id} xs={12} sm={6} md={4} xl={2}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              {title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={RouterLink} to={`/post/${id}`} size="small" variant="contained">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
    {children}
  </Grid>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostList,
  // Container as PostList,
  Component as PostListComponent,
};
