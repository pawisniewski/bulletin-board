import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


import { Grid, Card, CardContent, Button, TextField } from '@material-ui/core';


import styles from './PostCreator.module.scss';

const Component = ({className, children, post, changeHandler, submitForm}) => {
  const saveHandler = () => {
    submitForm();
  };

  return (
    <Grid container spacing={2} justify="center" className={clsx(className, styles.root)}>
      <Grid item xs={12} sm={6} md={4} xl={2}>
        <Card>
          <CardContent align="center">
            <form noValidate autoComplete='off'>
              <TextField
                value={post.title}
                onChange={changeHandler}
                name='title'
                id="title"
                label="Title"
              />
              <TextField
                value={post.text}
                onChange={changeHandler}
                name='text'
                id="text"
                label="Text"
                variant="outlined"
                multiline
                rows={6}
                margin='normal'
              />
            </form>
          </CardContent>
        </Card>
        <div className={styles.button}>
          <Button onClick={saveHandler} variant="contained" color="primary">Save post</Button>
        </div>
      </Grid>
      {children}
    </Grid>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  post: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  changeHandler: PropTypes.func,
  submitForm: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostCreator,
  // Container as PostCreator,
  Component as PostCreatorComponent,
};
